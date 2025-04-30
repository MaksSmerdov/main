export interface ConfigParam {
  device?: string;
  keyPrefix: string;
  label: string;
  unit?: string;
}

export interface Dataset {
  apiUrl: string;
  dataKey: string;
  params: {
    key: string;
    label: string;
    unit?: string;
  }[];
  nestedKey?: string;
}

export interface BackgroundZone {
  color: string;
  min: number;
  max: number;
  label: string;
}


export interface ChartProps {
  datasets: Dataset[];
  title: string;
  stepSize?: number;
  yMin?: number;
  yMax?: number;
  width?: number | string;
  height?: number | string;
  id?: string;
  showIntervalSelector?: boolean;
  animationEnabled?: boolean;
  backgroundZones?: BackgroundZone[];
}
