import "./styles.css";
import Head from "./Components/Head/Head";
import Register from "./Components/Register/Register";
import AddProduct from "./Components/AddProduct/AddProduct";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update" element={<UpdateProduct />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
