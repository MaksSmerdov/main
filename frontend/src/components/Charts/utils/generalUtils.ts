import {API_BASE_URL} from '../../../apiConfig.ts';

export const fetchServerTime = async (): Promise<number> => {
  try {
    const response = await fetch(`${API_BASE_URL}api/server-time`);
    const data = await response.json();
    const serverTime = new Date(data.time).getTime();
    const clientTime = Date.now();
    return serverTime - clientTime;
  } catch (error) {
    console.error('Ошибка при получении времени сервера:', error);
    return 0;
  }
};

export function extractValues<
  Item extends Record<string, unknown>
>(
  item: Item,
  dataKey: keyof Item & string,
  nestedKey?: string
): Record<string, number | null> {
  const raw = item[dataKey];
  if (
    raw !== null &&
    typeof raw === 'object' &&
    !Array.isArray(raw)
  ) {
    const record = raw as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(record).map(([key, val]) => {
        if (
          nestedKey &&
          val !== null &&
          typeof val === 'object' &&
          nestedKey in (val as Record<string, unknown>)
        ) {
          const v = (val as Record<string, unknown>)[nestedKey];
          return [key, typeof v === 'number' ? v : parseNumber(v)];
        }
        return [key, typeof val === 'number' ? val : parseNumber(val)];
      })
    );
  }
  return {};
}

function parseNumber(v: unknown): number | null {
  if (typeof v === 'string') {
    const n = parseFloat(v.replace(',', '.'));
    return isNaN(n) ? null : n;
  }
  return null;
}

export const createDataWithGaps = (
  data: { time: Date; values: { [key: string]: number } }[],
  key: string,
  gapThreshold: number = 60 * 1000
): { x: Date; y: number | null }[] => {
  const result: { x: Date; y: number | null }[] = [];

  for (let i = 0; i < data.length; i++) {
    const currentValue = data[i].values[key] !== undefined ? data[i].values[key] : null;
    result.push({x: data[i].time, y: currentValue});

    if (i < data.length - 1) {
      const currentTimestamp = data[i].time.getTime();
      const nextTimestamp = data[i + 1].time.getTime();
      if (nextTimestamp - currentTimestamp > gapThreshold) {
        result.push({
          x: new Date(currentTimestamp + gapThreshold),
          y: null,
        });
      }
    }
  }

  return result;
};
