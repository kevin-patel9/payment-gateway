import { Button } from "react-bootstrap";
import saveWater from "../../component/save-water.png";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <div className="save-water">
        <img src={saveWater} alt="bg Image" />
      </div>
      <div className="homeContainer">
        <div className="home">
          <h2>Our Past Goal Achievement</h2>
          <ul>
            <li>
              Achieved 5000+ village access to safe and affordable drinking
              water for all.
            </li>
            <li>
              Achieved access to adequate and hygiene for all and end open
              defecation
            </li>
            <li>
              Collected over 1+ Tonne of plastic and other waste from the sea,
              lakes, ocean and many more.
            </li>
          </ul>
          <div className="donateContainer">
            <p>
              "By donating you can claim tax deduction and Reserve Water For
              Future."
            </p>
            <Button id="donate-btn">
              <a href="https://rzp.io/l/od5ytMCR">Donation</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
