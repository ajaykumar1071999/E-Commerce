import "./styles.css";
import Head from "./Components/Head/Head";
import Register from "./Components/Register/Register";
import AddProduct from "./Components/AddProduct/AddProduct";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";
import Table from "./Components/Table/Table";
import Footer from "./Components/Footer/Footer";
import UserInfo from "./Components/UserInfo/UserInfo";
import Carousel from "./Components/Carousel/Carousel";
import CourseSection from "./Components/CourseSection/CourseSection";
import IntroTII from "./Components/IntroTII/IntroTII";
import ParentSupport from "./Components/ParentSupport/ParentSupport";
import BlogSection from "./Components/BlogSection/BlogSection";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head />
        <Routes>
          <Route path="/Home" element={<CourseSection/>}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update" element={<UpdateProduct />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Table" element={<Table />}></Route>
          <Route path="/UserInfo" element={<UserInfo />}></Route>
        </Routes>
        <Carousel />
        <CourseSection/>
        <IntroTII/>
        <ParentSupport/>
        <BlogSection/>
        

        <Footer/>
      </BrowserRouter>
    </div>
  );
}
