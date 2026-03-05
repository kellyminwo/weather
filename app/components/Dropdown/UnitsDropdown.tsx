"use client";

import { useState } from "react";
import Image from "next/image";
import { unitTypes } from "./utils/unitTypes";
import { useMetricSystemContext } from "@/app/provider"

import type { UnitType } from "@/app/types";

export default function UnitsDropdown() {
  const [toggle, setToggle] = useState(false);
  const { metricSystem, switchMetric } = useMetricSystemContext()

  return (
    <div className="dropdown relative text-preset-7 z-20">
      <button
        type="button"
        className="flex items-center gap-2 rounded-md bg-storm-800 px-4 py-3"
        onClick={() => setToggle((prevState) => !prevState)}
      >
        <Image src="/icon-units.svg" width={16} height={16} alt="Gear icon" />
        {metricSystem ? "Metric" : "Imperial"}
        <Image
          src="/icon-dropdown.svg"
          width={16}
          height={16}
          alt="Carat icon"
        />
      </button>

      {toggle && (
        <div className="menu-units absolute right-0 mt-2 w-64 rounded-md bg-storm-800 px-3 pt-4 pb-2">
          <button
            onClick={switchMetric}
            className="block w-full cursor-pointer rounded-md p-2 text-left font-bold text-tangerine transition duration-300 hover:bg-storm-700"
          >
            Switch to {metricSystem ? "Imperial" : "Metric"}
          </button>
          <dl className="flex flex-col gap-4 divide-y-1 divide-storm-600 pt-4">
            {unitTypes.map((unitType: UnitType, index: number) => (
              <div key={index} className="pb-2">
                <dt className="px-2 pb-2 text-preset-8 text-storm-300">
                  {unitType.type}
                </dt>
                {/* Checks each unit element to confirm if it's a metric system and has an index of 0 OR if it's NOT a metric system and has an index of 1. If it doesn't meet either criteria, remove select styles and checkmark indicator. */}
                {unitType.units.map((unit: string, index: number) =>
                  (metricSystem && index === 0) ||
                  (!metricSystem && index === 1) ? (
                    <dd
                      key={unit}
                      className="flex cursor-not-allowed items-center justify-between rounded-md bg-storm-700 p-2"
                    >
                      {unit}
                      <Image
                        src="/icon-checkmark.svg"
                        width={16}
                        height={16}
                        alt="Checkmark icon"
                      />
                    </dd>
                  ) : (
                    <dd key={unit} className="cursor-not-allowed p-2">{unit}</dd>
                  ),
                )}
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
