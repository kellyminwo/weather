import currentForecastDetails from "../utils/currentForecastDetails";
import { useMetricSystemContext } from "@/app/provider";

import type { CurrentForecastTilesProps } from "@/app/types";

export default function CurrentForecastTiles({
    currentWeather,
    isLoading
}: CurrentForecastTilesProps) {
    const { metricSystem } = useMetricSystemContext();

    return (
        currentForecastDetails(currentWeather, metricSystem).map(({ type, value, unit }) => (
            <div key={type} className="flex-1 space-y-4 rounded-xl bg-storm-800 p-10">
                <p className="text-preset-6 text-storm-200">{type}</p>
                <p className="text-preset-3">
                    {isLoading ? "--" : `${Math.round(value) + unit}`}
                </p>
            </div>
        ))
    );
}
