import { QueryClientProvider } from "react-query";
import { queryClient } from "../data/dataFetching";
import React from "react";


export const withQueryClient = <P,>(Component: React.ComponentType<P>) => {
  const Wrapped: React.ComponentType<P & React.JSX.IntrinsicAttributes> = (
    props
  ) => {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...props} />
      </QueryClientProvider>
    );
  };

  const name = Component.displayName || Component.name || "UnknownComponent";
  Wrapped.displayName = `withQueryClient ${name}`;
  return Wrapped;
};
