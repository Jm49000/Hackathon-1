import "./homePage.scss";
import "./button.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  const audio = new Audio("https://www.mboxdrive.com/hey.mp3");
  const start = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
  };
  return (
    <section>
      <button onClick={start} className="sound">
        ▶️
      </button>
      <button onClick={stop} className="sound">
        ⏸
      </button>
      <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="solar-syst">
        <div className="sun" />
        <div className="mercury" />
        <div className="venus" />
        <div className="earth" />
        <div className="mars" />
        <div className="jupiter" />
        <div className="saturn" />
        <div className="uranus" />
        <div className="neptune" />
        <div className="asteroid-belt" />
        <Link to="/wildearth" className="animated-button1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Entrer sur Terre
        </Link>

        <Link to="/contact" className="buttonContact">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Nous contacter
        </Link>
      </div>
    </section>
  );
}
