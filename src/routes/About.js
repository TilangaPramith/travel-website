import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import travelImg from "../assets/tavel.jpg";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";


function About () {
    return (
        <>
        <Navbar/>
         <Content
            cName="hero-mid"
            image={travelImg}
            title="About"
            btnClass="hide"
         />
         <AboutUs/>
         <Footer/>
        </>
        
    )


}

export default About;