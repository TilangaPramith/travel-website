import Destination from "../components/Destination/Destination";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar"
import Content from "../components/Content/Content";
import Trip from "../components/Trip/Trip";

import welcomeImage from "../assets/darkhome.jpg";
import Description from "../components/Description/Description";
function Home () {
    return (
        <>
        <Navbar/>
         <Content
            cName="hero"
            image={welcomeImage}
            title="Welcome to Travel My Sri Lanka – Your Gateway to Paradise"
            text="Discover the unparalleled beauty and charm of Sri Lanka with us. At Travel My Sri
                Lanka, we are more than just a tour company – we are your trusted partner in creating
                unforgettable travel experiences. From the lush green hill country to the golden sandy
                beaches, from ancient temples to vibrant cities, we help you explore Sri Lanka’s hidden
                gems and iconic landmarks."
            url="/"
            btnClass="show"
         />
         <Destination/>
         <Trip/>
         <Description
            title="Start Your Adventure Today"
            text="Your dream Sri Lankan adventure is just a click away. Whether you’re a solo traveler, a
                couple on a romantic getaway, or a family seeking new experiences, we have
                something for everyone.
                Let’s create memories that last a lifetime."
            url="/"
            btnClass="show"
         />
         <Footer/>
        </>
    )


}

export default Home;