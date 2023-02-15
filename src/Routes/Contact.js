import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import img3 from '../assets/13.jpg';
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
function Contact(){
    return(
    <>
       <Navbar />
      <Hero cName="hero-mid" heroImg={img3} title="Contact" btnClass="hide" />
      <ContactForm/>
      <Footer/>
    </>
    
    )
}
export default Contact;