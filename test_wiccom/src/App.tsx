import "./App.css";
import { Header } from "./components/Header";
import { MyThemeProvider } from "./styles/MyThemeprovider";
import { theme } from "./styles/theme";
import { LargeImgCarousel } from "./components/LargeImgCarousel";
import { ProductsCarouselSquare } from "./components/ProductsCarouselSquare";
import { ProductsCarouselCircle } from "./components/ProductsCarousel";
import { AthletesPanel } from "./components/AthletesPanel/AthletesPanel";
import { BlogDetailsCarousel } from "./components/BlogDetailsPanel";
import { ObjectivesContainer } from "./components/ObjectivesContainer";
import { Footer } from "./components/Footer";
import { UnderFooter } from "./components/UnderFooter";

function App() {
  return (
    <MyThemeProvider theme={theme}>
      <Header />
      <main>
        <LargeImgCarousel />
        <ProductsCarouselCircle />
        <ProductsCarouselSquare mainText="Lançamentos" />
        <AthletesPanel />
        <ProductsCarouselSquare mainText="Promoções" />
        <BlogDetailsCarousel />
        <ObjectivesContainer />
        <Footer />
        <UnderFooter />
      </main>
    </MyThemeProvider>
  );
}

export default App;
