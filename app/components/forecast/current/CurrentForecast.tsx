"use client";

import Image from "next/image";
import weatherTypes from "../utils/weatherTypes";
import CurrentForecastTiles from "./CurrentForecastTiles";

import type { CurrentForecastProps } from "@/app/types";

export default function CurrentForecast({
  currentWeather,
  locationName,
  isLoading,
}: CurrentForecastProps) {
  return (
    <>
      <section className="relative flex w-full items-center">
        <Image
          src="/bg-today-large.svg"
          width={125}
          height={125}
          alt=""
          className="hidden w-full md:block"
        />
        <Image
          src="/bg-today-small.svg"
          width={125}
          height={125}
          alt=""
          className="block w-full md:hidden"
        />
        {isLoading ? (
          <div className="absolute flex w-full flex-col items-center justify-between px-10 text-center">
            <Image
              className="mx-4 my-4 inline-block motion-safe:animate-spin"
              src="/icon-loading.svg"
              width={40}
              height={40}
              alt="Loading icon"
            />
            <p className="text-preset-6">Loading...</p>
          </div>
        ) : (
          <div className="absolute flex w-full flex-col items-center justify-between px-10 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-4 text-preset-4">{locationName}</h2>
              <p className="text-preset-6">
                {currentWeather.time.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src={
                  weatherTypes(currentWeather.weather_code) ||
                  "/icon-sunny.webp"
                }
                width={125}
                height={125}
                alt="Weather icon"
              />
              <p className="text-preset-1 italic">
                {Math.round(currentWeather.temperature_2m)}°
              </p>
            </div>
          </div>
        )}
      </section>
      <section className="my-10 flex grid grid-cols-2 flex-wrap gap-8 lg:grid-cols-4">
          <CurrentForecastTiles
            currentWeather={currentWeather}
            isLoading={isLoading}
          />
      </section>
    </>
  );
}
