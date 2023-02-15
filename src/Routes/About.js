import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import img1 from '../assets/aboutus.jpg'
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
function About(){
    return(
    <>
      <Navbar/>
     <Hero
      cName="hero-mid"
      heroImg={img1}
      title="About"
      btnClass="hide"

     />
     <AboutUs/>
      <Footer/>
    </>
    )
}
export default About;