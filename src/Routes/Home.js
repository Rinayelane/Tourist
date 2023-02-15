import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import img from '../assets/12.jpg'
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Home(){
    return(
    <>
    <Navbar/>
     <Hero
      cName="hero"
      heroImg={img}
      title="Your Journey Your story"
      text="Choose Your Favourite Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
      flag="true"
     />
     <Destination/>
     <Trip/> 
     <Footer/>

    </>
    );
}
export default Home;