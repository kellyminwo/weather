import type { UnitType } from "@/app/types";

export const unitTypes: UnitType[] = [
  {
    type: "Temperature",
    units: ["Celcius (°C)", "Fahrenheit (°F)"],
  },
  {
    type: "Wind Speed",
    units: ["km/h", "mph"],
  },
  {
    type: "Precipitation",
    units: ["Millimeters (mm)", "Inches (in)"],
  },
];
