import type { CurrentForecastTilesProps } from "@/app/types";

export default function CurrentForecastTiles({ isLoading, type, value, unit }: CurrentForecastTilesProps) {
    return (
        <div className="bg-storm-800 p-10 flex-1 rounded-xl space-y-4">
            <p className="text-storm-200 text-preset-6">{type}</p>
            <p className="text-preset-3">{isLoading ? '--' : `${Math.round(value) + unit}`}</p>
        </div>
    )
}