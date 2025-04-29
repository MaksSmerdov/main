import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {DatasetConfig, GenericData} from "./useHourlyChart.ts";

export const useDailyChart = (
  configs: DatasetConfig[],
  startTime: Date,
  endTime: Date,
  refresh = 60000,
) => {
  const [data, setData] = useState<GenericData[][]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  const uniqueCfgs = useMemo(() => {
    const map = new Map<string, DatasetConfig>();
    configs.forEach(cfg => {
      const key = `${cfg.apiUrl}|${cfg.dataKey}`;
      if (!map.has(key)) map.set(key, cfg);
    });
    return [...map.values()];
  }, [configs]);

  const load = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    // выбор флага загрузки
    if (data.length === 0) setInitialLoading(true);
    else setFetching(true);

    try {
      const responses = await Promise.all(
        uniqueCfgs.map(async ({apiUrl}) => {
          const url = `${apiUrl}?start=${startTime.toISOString()}&end=${endTime.toISOString()}`;
          const resp = await fetch(url, {signal: controller.signal});
          if (!resp.ok) throw new Error(`Status ${resp.status}`);
          return await resp.json() as Promise<GenericData[]>;
        }),
      );

      const dataByUrl = new Map<string, GenericData[]>(
        uniqueCfgs.map((c, i) => [`${c.apiUrl}|${c.dataKey}`, responses[i]]),
      );
      const ordered = configs.map(c => dataByUrl.get(`${c.apiUrl}|${c.dataKey}`) ?? []);

      setData(ordered);
      setError(null);
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setError(e as Error);
    } finally {
      setInitialLoading(false);
      setFetching(false);
    }
  }, [
    uniqueCfgs,
    startTime,
    endTime,
    configs,
    data.length,
  ]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!refresh) return;
    const id = setInterval(() => void load(), refresh);
    return () => clearInterval(id);
  }, [load, refresh]);

  useEffect(() => () => abortRef.current?.abort(), []);

  return {
    data,
    error,
    isInitialLoading,
    isFetching,
    refetch: load,
  };
};