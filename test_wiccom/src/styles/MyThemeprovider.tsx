import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals";

import { theme } from "./theme";

export const MyThemeProvider = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
