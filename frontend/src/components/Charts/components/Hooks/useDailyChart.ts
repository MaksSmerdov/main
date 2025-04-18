import {useEffect, useMemo, useRef, useState} from 'react';

export interface GenericReading {
  [k: string]: number
}

export interface GenericData {
  lastUpdated: string;
  values: GenericReading
}

export interface DatasetConfig {
  apiUrl: string;
  dataKey: string;
  params: { key: string; label: string; unit?: string }[];
}

export const useDailyChart = (
  configs: DatasetConfig[],
  startTime: Date,
  endTime: Date,
  refresh = 60_000
) => {
  const [data, setData] = useState<GenericData[][]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const uniqueCfgs = useMemo(() => {
    const map = new Map<string, DatasetConfig>();
    configs.forEach(cfg => {
      const key = `${cfg.apiUrl}|${cfg.dataKey}`;
      if (!map.has(key)) map.set(key, cfg);
    });
    return [...map.values()];
  }, [configs]);

  const load = async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    try {
      const responses = await Promise.all(
        uniqueCfgs.map(async ({apiUrl}) => {
          const url =
            `${apiUrl}?start=${startTime.toISOString()}&end=${endTime.toISOString()}`;
          const resp = await fetch(url, {signal: controller.signal});
          if (!resp.ok) throw new Error(`${resp.status}`);
          return resp.json();
        })
      );

      const dataByUrl = new Map<string, GenericData[]>(uniqueCfgs.map((c, i) => [
        `${c.apiUrl}|${c.dataKey}`,
        responses[i],
      ]));

      const ordered = configs.map(c =>
        dataByUrl.get(`${c.apiUrl}|${c.dataKey}`) ?? []
      );

      setData(ordered);
      setError(null);
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, [uniqueCfgs, startTime, endTime]);

  useEffect(() => {
    if (!refresh) return;
    const id = setInterval(load, refresh);
    return () => clearInterval(id);
  }, [refresh]);

  useEffect(() => () => abortRef.current?.abort(), []);

  return {data, error, isLoading: loading, refetch: load};
};
