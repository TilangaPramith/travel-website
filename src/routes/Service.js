import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import travelImg from "../assets/tavel.jpg";
import Footer from "../components/Footer/Footer";
import Trip from "../components/Trip/Trip";

function Service () {
    return (
        <>
        <Navbar/>
         <Content
            cName="hero-mid"
            image={travelImg}
            title="Service"
            btnClass="hide"
         />
         <Trip/>
         <Footer/>
        </>
    )


}

export default Service;