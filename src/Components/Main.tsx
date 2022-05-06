import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RainbowText } from "./RainbowText";
import { Header } from "./Header";
import "../SASS/Global.scss";
createRoot(document.getElementById("main")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<RainbowText />} />
    </Routes>
  </BrowserRouter>
);
