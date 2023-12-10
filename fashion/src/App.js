import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Downald from "./components/downald/Downald";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Payday from "./components/payday/Payday";
import Promo from "./components/promo/Promo";
import Young from "./components/young/Young";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Young />
      <Downald />
      <Footer />
    </div>
  );
}

export default App;
