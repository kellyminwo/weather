import type { CurrentWeather } from "@/app/types";

export default function currentForecastTypes(currentWeather: CurrentWeather, isMetric: boolean) {
    return (
        [
            {
                type: 'Feels Like',
                value: currentWeather.apparent_temperature,
                unit: '°'
            },
            {
                type: 'Humidity',
                value: currentWeather.relative_humidity_2m,
                unit: '%'
            },
            {
                type: 'Wind',
                value: currentWeather.wind_speed_10m,
                unit: isMetric ? 'km/hr' : 'mph'
            },
            {
                type: 'Precipitation',
                value: currentWeather.precipitation,
                unit: isMetric ? 'mm' : 'in'
            }
        ]
    )
}