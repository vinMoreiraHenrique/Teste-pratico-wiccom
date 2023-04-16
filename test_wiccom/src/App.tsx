import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MyThemeProvider } from "./styles/MyThemeprovider";
import { theme } from "./styles/theme";
import { LargeImgCarousel } from "./components/LargeImgCarousel";

import { ProductCardSquare } from "./components/ProductCardSquare";
import { ProductsCarouselSquare } from "./components/ProductsCarouselSquare";
import { ProductsCarouselCircle } from "./components/ProductsCarousel";
import SelectableButton from "./components/SelectableButton";

function App() {
  return (
    <MyThemeProvider theme={theme}>
      
      <Header />
      <main>
        <LargeImgCarousel />
        <ProductsCarouselCircle />
        <ProductsCarouselSquare />
        <SelectableButton textButton="Toffee"/>
        
      </main>
    </MyThemeProvider>
  );
}

export default App;
