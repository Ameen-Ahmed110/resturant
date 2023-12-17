import Navbar from "@/components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "@/components/Footer";
import Blogs from "@/components/Blogs";
import Review from "@/components/Review";
import Product from "@/components/Product";
import OurMenue from "@/components/OurMenue";
import LandingPage from "@/components/LandingPage";


export default function Home() {
  return (
   <div className="flex flex-col gap-11">
    <Navbar />
    <LandingPage />
    <About />
    <OurMenue />
    <Product />
    <Review />
    <Contact />
    <Blogs />
    <Footer />
   </div>
  )
}
