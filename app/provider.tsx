"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext, useContext, useState } from "react";

import type { ProvidersProps, MetricSystemContextType } from "@/app/types";

const MetricSystemContext = createContext<MetricSystemContextType | undefined>(undefined);

export const useMetricSystemContext = () => {
  let context = useContext(MetricSystemContext)
  if (context === undefined) {
    throw Error('Must be used within context.')
  }

  return context
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [metricSystem, setMetricSystem] = useState(true);

  const switchMetric = () => {
    setMetricSystem((prevState) => !prevState);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MetricSystemContext value={{metricSystem, switchMetric}}>
        {children}
      </MetricSystemContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
