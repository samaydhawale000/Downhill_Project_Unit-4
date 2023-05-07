import "./App.css";
import { Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage"
import Home from "./pages/Home"
import SingleProduct from "./pages/SingleProduct"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
      </Routes>

    </div>
  );
}

export default App;
