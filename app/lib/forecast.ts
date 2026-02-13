import { fetchWeatherApi } from 'openmeteo'

export async function getForecast(la: number, lo: number) {
    const params = {
        latitude: la,
        longitude: lo,
        daily: ["sunrise", "sunset", "weather_code", "temperature_2m_max", "temperature_2m_min"],
        hourly: ["temperature_2m", "weather_code"],
        current: ["temperature_2m", "apparent_temperature", "weather_code", "relative_humidity_2m", "wind_speed_10m", "precipitation"],
        timezone: "auto",
    };

    try {
        const responses = await fetchWeatherApi("https://api.open-meteo.com/v1/forecast", params)

        const response = responses[0]
        return response

    } catch (error) {
        throw new Error(`Coordinates not found`);
    }
}