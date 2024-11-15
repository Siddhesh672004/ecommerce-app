import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/Products" element={<Products />} />{" "}
            {/* Route for Products */}
            <Route path="/product/:id" element={<ProductDetail />} />{" "}
            {/* Correct route for Product Detail */}
            <Route path="/Slider" element={<Slider />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
