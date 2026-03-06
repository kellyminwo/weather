export default function weatherTypes(code: number): string | undefined {
  const weatherCode = code;
  switch (true) {
    case weatherCode === 0:
      return "/icon-sunny.webp";
    case weatherCode === 1 || weatherCode === 2:
      return "/icon-partly-cloudy.webp";
    case weatherCode === 3:
      return "/icon-overcast.webp";
    case weatherCode === 45 || weatherCode === 48:
      return "/icon-fog.webp";
    case weatherCode === 51 ||
      weatherCode === 53 ||
      weatherCode === 55 ||
      weatherCode === 56 ||
      weatherCode === 57:
      return "/icon-drizzle.webp";
    case weatherCode === 61 ||
      weatherCode === 63 ||
      weatherCode === 65 ||
      weatherCode === 66 ||
      weatherCode === 67 ||
      weatherCode === 80 ||
      weatherCode === 81 ||
      weatherCode === 82:
      return "/icon-rain.webp";
    case weatherCode === 71 ||
      weatherCode === 73 ||
      weatherCode === 75 ||
      weatherCode === 77 ||
      weatherCode === 85 ||
      weatherCode === 86:
      return "/icon-snow.webp";
    case weatherCode === 95 || weatherCode === 96 || weatherCode === 99:
      return "/icon-storm.webp";
    default:
      return "/icon-sunny.webp";
  }
}
