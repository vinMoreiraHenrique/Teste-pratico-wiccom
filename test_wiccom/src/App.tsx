import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MyThemeProvider } from "./styles/MyThemeprovider";
import { theme } from "./styles/theme";

function App() {
  return (
    <MyThemeProvider theme={theme}>
      <Header />
    </MyThemeProvider>
  );
}

export default App;
