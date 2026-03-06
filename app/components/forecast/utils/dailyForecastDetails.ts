import { DailyWeather } from '@/app/types'

export default function dailyForecastDetails(
    dailyWeather: DailyWeather
) {
    const day = dailyWeather.time?.map(day => day.toLocaleDateString("en-US", { weekday: "short" }))
    const [...weatherCode] = dailyWeather?.weather_code ?? []
    const [...maxTemp] = dailyWeather.temperature_2m_max?.map(temp => Math.round(temp)) ?? []
    const [...minTemp] = dailyWeather.temperature_2m_min?.map(temp => Math.round(temp)) ?? []

    return (
        // Creates an array of objects each containing day, weatherCode, max and min temps
        day.map((item, index) => (
            {
                day: item,
                weatherCode: weatherCode[index],
                maxTemp: maxTemp[index],
                minTemp: minTemp[index]
            }
        ))
    )
}