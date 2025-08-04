import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Cardcont from "./components/Cardcont";
import Footer from "./components/Footer";
import Navparandheader from "./components/Navparandheader";
import About from "./pages/about";

const Contener = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      {/* Navigation */}
      <Navparandheader count={count} />

      <Routes>
        <Route path="/" element={<Cardcont incrementCount={incrementCount} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Contener;
