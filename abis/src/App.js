import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Review from "./components/review/review";
import Content1 from "./components/content/content1";
import AboutUs from "./components/about/about";
import Features from "./components/features/features";
import Contact from "./components/contact/contact";
import Content2 from "./components/content/content2";

export default function App() {
  return (
    <>
      <div className="p-6">
        <Navbar />
        <Content1 />
        <Content2 />
        <Features />
        <AboutUs />
        <Contact />
        <Review />
        <Footer />
      </div>
    </>
  );
}
