import Image from "next/image";
import weatherTypes from "../utils/weatherTypes";
import dailyForecastDetails from '../utils/dailyForecastDetails'

import type { DailyForecastProps } from '@/app/types'

export default function DailyForecastTiles({ dailyWeather, isLoading }: DailyForecastProps) {
    return (
        dailyForecastDetails(dailyWeather).map(({ day, weatherCode, maxTemp, minTemp }) => (
            <div key={day} className="flex flex-1 justify-between items-center rounded-xl bg-storm-800 px-5 lg:flex-col lg:py-10 lg:px-0 lg:space-y-4">
                {isLoading ? "--" :
                    <>
                        <div className="flex flex-row-reverse items-center gap-x-2 lg:flex-col">
                            <p className="text-preset-6 text-storm-200 mb-0">{day}</p>
                            <Image
                                src={
                                    weatherTypes(weatherCode) ||
                                    "/icon-sunny.webp"
                                }
                                width={75}
                                height={75}
                                alt="Weather icon"
                            />
                        </div>
                        <div className="flex gap-x-8">
                            <p className="text-preset-7">{maxTemp}°</p>
                            <p className="text-preset-7 text-storm-200">{minTemp}°</p>
                        </div>
                    </>
                }
            </div>
        ))
    )
}