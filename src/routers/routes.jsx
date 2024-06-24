import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Stats } from "../pages/Stats";
import { Products } from "../pages/Products";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}
