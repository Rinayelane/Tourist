import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData 
        className="first-des"
        heading="Taj Mahal"
        text="If there was just one symbol to represent all of India, it would be the Taj Mahal. The monument inspires millions of tourists to make the trip to Agra every year, waking up before dawn to see magnificent structure radiate at sunrise. But Agra tops the list of the best places to visit in India for reasons that go beyond India's most famous attraction."
        img1={Mountain1}
        img2={Mountain2}
      />



<DestinationData 
        className="first-des-reverse"
        heading="Rishikesh"
        text="Rishikesh has been on the radar for spiritually minded travelers since the late 1960s, when the Beatles spent time in Maharishi Mahesh Yogi's ashram–now an abandoned site that has become an off-the-beaten-path tourist attraction for fans.The town is nestled in the foothills of the Himalayas on the banks of the holy Ganges River, and serves as a center for yoga and pilgrimages. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
    
  );
};
export default Destination;
