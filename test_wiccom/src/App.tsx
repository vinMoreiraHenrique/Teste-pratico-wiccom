import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MyThemeProvider } from "./styles/MyThemeprovider";
import { theme } from "./styles/theme";
import { LargeImgCarousel } from "./components/LargeImgCarousel";
import { ProductsCarousel } from "./components/ProductsCarousel";

function App() {
  return (
    <MyThemeProvider theme={theme}>
      
      <Header />
      <main>
        <LargeImgCarousel />
        <ProductsCarousel />

        
      </main>
    </MyThemeProvider>
  );
}

export default App;
