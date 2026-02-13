'use client'

import { forecastData, offsetTime, getCurrentWeatherData, getHourlyWeatherData, getDailyWeatherData } from '@/app/data/forecastData'

export default function Forecast({ la, lo }: { la: number, lo: number }) {
    const { data, isLoading } = forecastData(la, lo)
    const utcOffsetSeconds: number | undefined = offsetTime(data) ?? 0;
    const currentWeatherData = getCurrentWeatherData(data, utcOffsetSeconds)
    const hourlyWeatherData = getHourlyWeatherData(data, utcOffsetSeconds)
    const dailyWeatherData = getDailyWeatherData(data, utcOffsetSeconds)

    return (
        <section>
            {isLoading && (
                <p className="px-4 py-4">
                    Search in progress
                </p>
            )}
        </section>
    )
}