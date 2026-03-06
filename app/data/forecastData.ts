"use client";

import { useQuery } from "@tanstack/react-query";
import { getForecast } from "@/app/lib/forecast";
import { useMetricSystemContext } from "@/app/provider";

export function forecastData(la: number, lo: number) {
  const { metricSystem } = useMetricSystemContext();
  return useQuery({
    queryKey: ["forecast", la, lo, metricSystem],
    queryFn: () => getForecast(la, lo, metricSystem),
    enabled: !!la && !!lo,
    staleTime: 1000 * 60 * 5,
  });
}

export function offsetTime(data: any): number | undefined {
  return data?.utcOffsetSeconds();
}

export function getCurrentWeatherData(data: any, utcOffsetSeconds: number) {
  const current = data?.current()!;
  return {
    time: new Date((Number(current?.time()) + utcOffsetSeconds) * 1000),
    temperature_2m: current?.variables(0)!.value(),
    apparent_temperature: current?.variables(1)!.value(),
    weather_code: current?.variables(2)!.value(),
    relative_humidity_2m: current?.variables(3)!.value(),
    wind_speed_10m: current?.variables(4)!.value(),
    precipitation: current?.variables(5)!.value(),
  };
}

export function getHourlyWeatherData(data: any, utcOffsetSeconds: number) {
  const hourly = data?.hourly()!;
  return {
    time: Array.from(
      {
        length:
          (Number(hourly?.timeEnd()) - Number(hourly?.time())) /
          hourly?.interval(),
      },
      (_, i) =>
        new Date(
          (Number(hourly?.time()) + i * hourly?.interval() + utcOffsetSeconds) *
            1000,
        ),
    ),
    temperature_2m: hourly?.variables(0)!.valuesArray(),
    weather_code: hourly?.variables(1)!.valuesArray(),
  };
}

export function getDailyWeatherData(data: any, utcOffsetSeconds: number) {
  const daily = data?.daily()!;
  const sunrise = daily?.variables(0)!;
  const sunset = daily?.variables(1)!;
  return {
    time: Array.from(
      {
        length:
          (Number(daily?.timeEnd()) - Number(daily?.time())) /
          daily?.interval(),
      },
      (_, i) =>
        new Date(
          (Number(daily?.time()) + i * daily?.interval() + utcOffsetSeconds) *
            1000,
        ),
    ),
    // Map Int64 values to according structure
    sunrise: [...Array(sunrise?.valuesInt64Length())].map(
      (_, i) =>
        new Date((Number(sunrise?.valuesInt64(i)) + utcOffsetSeconds) * 1000),
    ),
    // Map Int64 values to according structure
    sunset: [...Array(sunset?.valuesInt64Length())].map(
      (_, i) =>
        new Date((Number(sunset?.valuesInt64(i)) + utcOffsetSeconds) * 1000),
    ),
    weather_code: daily?.variables(2)!.valuesArray(),
    temperature_2m_max: daily?.variables(3)!.valuesArray(),
    temperature_2m_min: daily?.variables(4)!.valuesArray(),
  };
}
