// getDailyChartOptions.ts
import {ChartOptions} from 'chart.js';
import {getBaseChartOptions} from './generalConfig.ts';
import {BackgroundZone} from '../types/configChart.ts';

const RIGHT_PADDING_MS = 30 * 60 * 1000;

export const getDailyChartOptions = (
  startTime: number,
  endTime: number,
  title: string,
  isAutoScroll: boolean,
  params: { key: string; label: string; unit?: string }[],
  stepSize?: number,
  yMin?: number,
  yMax?: number,
  backgroundZones?: BackgroundZone[],
): ChartOptions<'line'> => {
  const baseOptions = getBaseChartOptions(
    startTime,
    endTime,
    title,
    isAutoScroll,
    params,
    yMin,
    yMax,
    backgroundZones,
  );

  const baseX = (baseOptions.scales?.x as any)?.max ?? endTime;
  const paddedXMax =
    typeof baseX === 'number' ? baseX + RIGHT_PADDING_MS : endTime + RIGHT_PADDING_MS;

  return {
    ...baseOptions,
    animation: false,
    plugins: {
      ...baseOptions.plugins,
      title: {
        ...baseOptions.plugins?.title,
        padding: {top: 0, bottom: 10},
      },
      legend: {
        display: true,
        labels: {font: {size: 12}, boxWidth: 30},
      },
    },

    scales: {
      ...baseOptions.scales,
      x: {
        ...baseOptions.scales?.x,
        time: {
          unit: 'hour',
          minUnit: 'hour',
          displayFormats: {hour: 'HH:mm'},
        },
        max: paddedXMax,
      },
      y: {
        ...baseOptions.scales?.y,
        ticks: {stepSize: stepSize}
      }
    },
  } as ChartOptions<'line'>;
};
