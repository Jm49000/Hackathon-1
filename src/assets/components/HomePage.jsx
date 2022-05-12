import "./homePage.scss";
import "./button.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
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
        Entrez sur le site
      </Link>

      <Link to="/contact" className="buttonContact">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Nous contacter
      </Link>
    </div>
  );
}
