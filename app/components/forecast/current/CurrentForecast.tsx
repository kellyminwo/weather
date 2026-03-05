"use client";

import Image from "next/image";
import weatherTypes from "../utils/weatherTypes"
import currentForecastTypes from "../utils/currentForecastTypes"
import CurrentForecastTiles from './CurrentForecastTiles'
import { useMetricSystemContext } from "@/app/provider"

import type { CurrentForecastProps } from "@/app/types";

export default function CurrentForecast({
    currentWeather,
    locationName,
    isLoading
}: CurrentForecastProps) {
    const { metricSystem } = useMetricSystemContext()
    return (
        <>
            <section className="relative flex items-center w-full">
                <Image
                    src="/bg-today-large.svg"
                    width={125}
                    height={125}
                    alt=""
                    className="w-full hidden md:block"
                />
                <Image
                    src="/bg-today-small.svg"
                    width={125}
                    height={125}
                    alt=""
                    className="w-full block md:hidden"
                />
                {isLoading ?
                    <div className="absolute flex flex-col items-center justify-between text-center px-10 w-full">
                        <Image
                            className="mx-4 my-4 inline-block motion-safe:animate-spin"
                            src="/icon-loading.svg"
                            width={40}
                            height={40}
                            alt="Loading icon"
                        />
                        <p className="text-preset-6">
                            Loading...
                        </p>
                    </div> :
                    <div className="absolute flex flex-col items-center justify-between text-center px-10 w-full md:flex-row md:text-left">
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
                                src={weatherTypes(currentWeather.weather_code) || "/icon-sunny.webp"}
                                width={125}
                                height={125}
                                alt="Weather icon"
                            />
                            <p className="text-preset-1 italic">
                                {Math.round(currentWeather.temperature_2m)}°
                            </p>
                        </div>
                    </div>}
            </section>
            <section className="flex flex-wrap gap-8 my-10 grid grid-cols-2 lg:grid-cols-4">
                {
                    currentForecastTypes(currentWeather, metricSystem).map(tile => (
                        <CurrentForecastTiles key={tile.type} isLoading={isLoading} type={tile.type} value={tile.value} unit={tile.unit} />
                    ))
                }
            </section>
        </>
    );
}
