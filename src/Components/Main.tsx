import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../SASS/Global.scss";
createRoot(document.getElementById("main")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
    </Routes>
  </BrowserRouter>
);
