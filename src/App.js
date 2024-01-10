import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Allflight from "./pages/Allflight";
import Passengers from "./pages/Passengers";
import Scdeule from "./pages/Scdeule";
import YourOrder from "./pages/YourOrder";
import Preloader from "./components/Preloader";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div>
      <div>
      <Preloader />
        <Header />
        <Tabs />
      </div>
      <Routes>
        <Route path="/" element={<Allflight />} />
        <Route path="/scdeule" element={<Scdeule />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/your" element={<YourOrder  />} />
      </Routes>
    </div>
  );
}

export default App;
