"use client";

import { useState } from "react";
import Form from "next/form";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getLocation } from "@/app/lib/location";
import LocationDropdown from "@/app/components/dropdown/LocationDropdown";

export default function Searchbar() {
  const [locationQuery, setLocationQuery] = useState<string | number>("");
  const { data, isLoading } = useQuery({
    queryKey: ["locations", locationQuery],
    queryFn: () => getLocation(locationQuery),
    enabled: !!locationQuery,
    staleTime: 1000 * 60 * 5,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const resetQuery = () => setLocationQuery("");

  const handleSubmit = () => {
    const selected = data?.results?.[0];
    const coordinate = [
      ["la", selected?.latitude],
      ["lo", selected?.longitude],
      ["name", `${selected?.name}, ${selected?.country}`],
    ];
    const currentParams = new URLSearchParams(searchParams);

    selected
      ? coordinate.map((line) => currentParams.set(line[0], line[1]))
      : coordinate.map((line) => currentParams.delete(line[0]));

    router.push(`?${currentParams.toString()}`);
    resetQuery();
  };

  return (
    <section className="relative mx-auto lg:w-1/2">
      <Form
        action={handleSubmit}
        className="flex justify-center gap-x-4 text-preset-5-medium"
      >
        <div className="flex flex-auto gap-x-4 rounded-lg bg-storm-800 px-7 py-5 focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-storm-200">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <Image
            src="/icon-search.svg"
            width={20}
            height={20}
            alt="Search icon"
          />
          <input
            type="text"
            id="search"
            name="locationQuery"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            autoComplete="off"
            placeholder="Search for a place..."
            className="w-full outline-none"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-royal-500 px-7 py-5 transition duration-300 hover:bg-royal-700 focus:outline-2 focus:outline-offset-3 focus:outline-royal-500"
        >
          Search
        </button>
      </Form>
      <LocationDropdown
        locationData={data}
        isLoading={isLoading}
        locationQuery={locationQuery}
        resetQuery={resetQuery}
      />
    </section>
  );
}
