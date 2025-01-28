import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../../assets/fisherman.jpg";
import Trip2 from "../../assets/elephant.jpg";
import Trip3 from "../../assets/sea2.jpg";
import Trip4 from "../../assets/train.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Our Top Experiences</h1>
            {/* <p>You can discover unique destinations using google Maps.</p> */}
            <div className="tripcard">
                <TripData
                    imgs = {Trip1}
                    heading = "Cultural Escapes"
                    text = "Immerse yourself in the wonders of Sri Lanka’s UNESCO World Heritage Sites like Sigiriya, Anuradhapura, and the Dambulla Cave Temples."
                />

                <TripData
                    imgs = {Trip2}
                    heading = "Wildlife Safaris"
                    text = "Witness majestic elephants, elusive leopards, and exotic birdlife in their natural habitats at Yala, Udawalawe, and Wilpattu National Parks."
                />

                <TripData
                    imgs = {Trip3}
                    heading = "Beach Bliss"
                    text = "Relax on the pristine beaches of Bentota, Mirissa, or Trincomalee, or indulge in thrilling water sports along the coast."
                />

                <TripData
                    imgs = {Trip4}
                    heading = "Hill Country Retreats"
                    text = "Journey through the emerald tea plantations of Nuwara Eliya, ride the scenic train to Ella, and hike the trails of Horton Plains."
                />
            </div>
        </div>
        
    )
}

export default Trip;