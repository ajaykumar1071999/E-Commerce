import "./styles.css";
import Head from "./Components/Head/Head";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";
import CourseSection from "./Components/CourseSection/CourseSection";
import IntroTII from "./Components/IntroTII/IntroTII";
import ParentSupport from "./Components/ParentSupport/ParentSupport";
import BlogSection from "./Components/BlogSection/BlogSection";
import ConsultationSection from "./Components/ConsultationSection/ConsultationSection";
import TestimonialSection from "./Components/TestimonialSection/TestimonialSection";
import JoinUs from "./Components/JoinUs/JoinUs";
import Courses from "./Components/Courses/Courses";
import Consultations from "./Components/Consultations/Consultations";
import Activities from "./Components/Activities/Activities";
import Events from "./Components/Events/Events";
import Careers from "./Components/Careers/Careers";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/Home"></Route>
          <Route path="/Courses" element={<Courses />}></Route>
          <Route path="/Consultations" element={<Consultations />}></Route>
          <Route path="/Activities" element={<Activities />}></Route>
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/Careers" element={<Careers />}></Route>
        </Routes>
        <Carousel />
        <CourseSection />
        <IntroTII />
        <ParentSupport />
        <BlogSection />
        <ConsultationSection />
        <TestimonialSection />
        <JoinUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
