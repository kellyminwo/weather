"use client";

import {
  forecastData,
  offsetTime,
  getCurrentWeatherData,
  getHourlyWeatherData,
  getDailyWeatherData,
} from "@/app/data/forecastData";
import CurrentForecast from "./current/CurrentForecast";
import DailyForecast from "./daily/DailyForecast";

import type { ForecastProps } from "@/app/types";

export default function Forecast({ la, lo, locationName }: ForecastProps) {
  const { data, isLoading } = forecastData(la, lo);
  const utcOffsetSeconds: number | undefined = offsetTime(data) ?? 0;
  const currentWeatherData = getCurrentWeatherData(data, utcOffsetSeconds);
  const hourlyWeatherData = getHourlyWeatherData(data, utcOffsetSeconds);
  const dailyWeatherData = getDailyWeatherData(data, utcOffsetSeconds);

  return (
    <section className="mt-14">
      <CurrentForecast
        currentWeather={currentWeatherData}
        locationName={locationName}
        isLoading={isLoading}
      />
      <DailyForecast dailyWeather={dailyWeatherData} isLoading={isLoading} />
    </section>
  );
}
