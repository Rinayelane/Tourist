import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import img2 from '../assets/service.jpg';
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero-mid" 
      heroImg={img2} title="Service" 
      btnClass="hide" 
       />
       <Trip/>
      <Footer/>
    </>
  );
}
export default Service;
