import "./App.css";
import { Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage"
import Home from "./pages/Home"
import SingleProduct from "./pages/SingleProduct"
import LogIn from "./pages/LogIn"


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
