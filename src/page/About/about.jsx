import saveWater from "../../component.jsx/save-water.png";
import "./about.css";

export const About = () => {
  return (
    <div>
      <img src={saveWater} className="bg-image" />
      <div className="aboutContainer">
        <div className="about">
          <h2>About Us</h2>
          <p>
            We are a India-based, non-profit organization focused on bringing
            clean water to the world’s most impoverished communities through the
            installation of community-based water filtration systems and
            implementing our Water-Health and Hygiene Education programs. Our
            projects are focused on schools, children, and rural communities
            across Asia and Latin America.
          </p>
        </div>
        <div className="about">
          <h2>Support Water Charity</h2>
          <p>
            We get a lot of offers for volunteers; unfortunately, we have very
            limited use for interns and volunteers. All our on-the-ground labor
            is locally sourced. Occasionally, we get offered stuff we can sell
            (cars, gold bricks, artwork, real estate). We are happy to take
            whatever you can offer. Of course, the simplest and most direct way
            to support us is to donate money.
          </p>
        </div>
        <div className="about">
          <h2>Mission</h2>
          <p>
            Together, we aim to ensure sustainable access to safe water,
            sanitation and hygiene for communities all around the world through
            innovative partnerships, creativity and the power of art.
          </p>
        </div>
      </div>
    </div>
  );
};
