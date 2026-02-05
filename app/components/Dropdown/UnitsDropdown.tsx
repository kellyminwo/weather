"use client";

import { useState } from "react";
import Image from "next/image";

import type { UnitDetails } from "@/.next/types";

export default function UnitsDropdown() {
    const unitDetails: UnitDetails[] = [
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

    return (
        <div className="dropdown relative text-preset-7">
            <button
                type="button"
                className="flex items-center gap-2 rounded-md bg-storm-800 px-4 py-3"
            >
                <Image src="/icon-units.svg" width={16} height={16} alt="Gear icon" />
                Units
                <Image
                    src="/icon-dropdown.svg"
                    width={16}
                    height={16}
                    alt="Carat icon"
                />
            </button>

            <div className="menu-units absolute right-0 mt-2 w-64 rounded-md bg-storm-800 px-3 pt-4 pb-2">
                <a href="#" className="block rounded-md p-2 hover:bg-storm-700">
                    Switch to Imperial
                </a>
                <dl className="flex flex-col gap-4 divide-y-1 divide-storm-600 pt-4">
                    {unitDetails.map((unitType: UnitDetails) => (
                        <div key="unitType.type" className="pb-2">
                            <dt className="px-2 pb-2 text-preset-8 text-storm-300">
                                {unitType.type}
                            </dt>
                            {unitType.units.map((unit) => (
                                <dd className="cursor-not-allowed rounded-md p-2 hover:bg-storm-700">
                                    {unit}
                                </dd>
                            ))}
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
