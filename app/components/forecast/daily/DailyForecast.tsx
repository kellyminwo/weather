import DailyForecastTiles from './DailyForecastTiles'

import type { DailyForecastProps } from "@/app/types";

export default function DailyForecast({
    dailyWeather,
    isLoading,
}: DailyForecastProps) {
    return (
        <section className="">
            <h3 className="text-preset-5">Daily Forecast</h3>
            <section className="mt-5 mb-10 flex flex-col gap-4 lg:flex-row">
                <DailyForecastTiles
                    dailyWeather={dailyWeather}
                    isLoading={isLoading}
                />
            </section>
        </section>
    );
}
