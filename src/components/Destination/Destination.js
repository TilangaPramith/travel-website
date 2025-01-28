import DestinationData from "./DestinationData"

import Cabana from "../../assets/cabana.jpg";
import Tea from "../../assets/tea.jpg";
import Tower from "../../assets/tower.jpg";
import Travel from "../../assets/travel.jpg";
import Fishing from "../../assets/fishing.jpg";
import Travelers from "../../assets/travelers.jpeg";
import SigiriyaTravel from "../../assets/sigiriyatravel.jpg";
import Sigiriya from "../../assets/sigiriya.jpg";
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Why Travel My Sri Lanka?</h1>
            {/* <p>Tours give you the opportunity to see a lot, within a time frame</p> */}
            
            <DestinationData
                className="first-des"
                heading = "Tailor-Made Experiences"
                text = "We craft personalized itineraries to suit your interests, whether it’s adventure, culture, relaxation, or all of the above."
                img1 = {Travelers}
                img2 = {Travel}
            />

            <DestinationData
                className="first-des-reverse"
                heading = "Expert Local Guides"
                text = "Our experienced and passionate guides ensure you get the insider’s perspective on Sri Lanka’s rich history, traditions, and culture."
                img1 = {Fishing}
                img2 = {Tea}
            />

            <DestinationData
                className="first-des"
                heading = "Seamless Travel"
                text = "From airport pickups to luxury accommodations and guided tours, we take care of every detail so you can travel stress-free."
                img1 = {Tower}
                img2 = {Cabana}
            />

            <DestinationData
                className="first-des-reverse"
                heading = "Sustainable Tourism"
                text = "We believe in responsible travel. By supporting local and eco-friendly initiatives, we ensure your journey leaves a act."
                img1 = {SigiriyaTravel}
                img2 = {Sigiriya}
            />
            
        </div>

    )
}

export default Destination