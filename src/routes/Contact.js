import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import travelImg from "../assets/tavel.jpg";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";

function Contact () {
    return (
        <>
        <Navbar/>
         <Content
            cName="hero-mid"
            image={travelImg}
            title="Contact"
            btnClass="hide"
         />
         <ContactForm/>
         <Footer/>
        </>
    )


}

export default Contact;