import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/7.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinstions using Soogle Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Goa"
          text="  India's not just full of big cities and holy sites–it also has incredible beaches down south in Goa. Its stretches of golden sand along the Arabian Sea offer something for every type of tourist.
"
        />
        <TripData
          image={Trip2}
          heading="Trip in Ajanta and Ellora Caves"
          text="  Time travel isn't a reality for travelers quite yet, but you can get pretty close at the Ajanta and Ellora Caves in Maharashtra. Both UNESCO World Heritage Sites, the caves feature intricate carvings from at least 1,500 years ago.
"
        />
        <TripData
          image={Trip3}
          heading="Trip in Darjeeling"
          text="  Sightseeing in India doesn't get much better than what you'll discover in Darjeeling. The hill station in West Bengal is beloved for its lush green tea plantations, awe-inspiring snow-capped peaks (including Khangchendzonga, the world's third-highest mountain), and serene Buddhist monasteries. 
"
        />
      </div>
    </div>
  );
}
export default Trip;
