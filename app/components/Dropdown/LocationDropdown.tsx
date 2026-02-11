import Image from "next/image";
import Link from "next/link";

import type { Location, LocationDropdownProps } from "@/.next/types";

export default function LocationDropdown({
  locationData,
  isLoading,
  locationQuery,
  resetQuery,
}: LocationDropdownProps) {
  const queryLength = locationQuery.toString().length > 1;

  return (
    queryLength && (
      <div className="absolute mt-4 w-full rounded-lg bg-storm-800 px-2 py-4 text-preset-7">
        {isLoading && (
          <p className="px-4 py-4">
            <Image
              className="mr-4 inline-block"
              src="/icon-loading.svg"
              width={20}
              height={20}
              alt="Loading icon"
            />
            Search in progress
          </p>
        )}
        {locationData?.results?.map((location: Location, index: number) => (
          <Link
            key={location.id}
            className="block rounded-lg px-4 py-4 transition duration-300 hover:bg-storm-700"
            href={{
              pathname: "/",
              query: { la: location.latitude, lo: location.longitude },
            }}
            onNavigate={resetQuery}
            // Figure out how to make selections tabbable
          >
            {location.name}
            <span className="block text-preset-8 text-storm-300">
              {location.admin1
                ? `${location.admin1}, ${location.country}`
                : `${location.country}`}
            </span>
          </Link>
        ))}
        {locationData?.results === undefined && !isLoading && (
          <p className="px-4 py-4">'{locationQuery}' not found.</p>
        )}
      </div>
    )
  );
}
