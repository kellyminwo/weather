import type { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export type ProvidersProps = {
  children: ReactNode;
};

export type MetricSystemContextType = {
  metricSystem: boolean;
  switchMetric: () => void;
};

export type UnitType = {
  type: string;
  units: string[];
};

export type Location = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  admin1: string;
  country: string;
};

export type LocationDropdownProps = {
  locationData: any;
  isLoading: boolean;
  locationQuery: string | number;
  resetQuery: () => void;
};

export type CurrentWeather = {
  time: Date;
  temperature_2m: number;
  apparent_temperature: number;
  weather_code: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
};

export type DailyWeather = {
  time: Date[];
  sunrise: Date[];
  sunset: Date[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
};

export type ForecastProps = {
  la: number;
  lo: number;
  locationName: string;
};

export type CurrentForecastProps = {
  currentWeather: CurrentWeather;
  locationName: string;
  isLoading: boolean;
};

export type CurrentForecastTilesProps = {
  currentWeather: CurrentWeather;
  isLoading: boolean;
};

export type DailyForecastProps = {
  dailyWeather: DailyWeather;
  isLoading: boolean;
};
