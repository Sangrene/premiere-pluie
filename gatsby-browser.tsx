import React from "react";
import { WrapPageElementBrowserArgs } from "gatsby";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./src/data/dataFetching";
import "./src/styles/global.css";

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
};
