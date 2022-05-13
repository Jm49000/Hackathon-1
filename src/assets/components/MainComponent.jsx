import "../components/sass/MainComponent.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainComponent() {
  const [showModal, setShowModal] = useState(false);
  const [arrayIq, setArrayIq] = useState([]);
  const [filter, setFilter] = useState("");
  const Modal = (props) => {
    return (
      <div className={`modal ${props.show ? "active" : ""}`}>
        {props.children}
      </div>
    );
  };
  const ModalBody = (props) => {
    return <div className="modal__body ">{props.children}</div>;
  };
  const ModalFooter = (props) => {
    return <div className="modal__footer ">{props.children}</div>;
  };
  function getArrayIq() {
    const air = [];
    axios
      .get("https://api.ambeedata.com/latest/by-city", {
        headers: {
          "X-Api-Key":
            "c0695f0197833d008c8c3d32d8231cb1450fc49767a15684e482858c601ba1d0",
          "Content-type": "application/json",
        },
        params: {
          city: filter,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        air.push(data.stations[0]);
        setArrayIq(air);
      });
  }
  useEffect(() => {
    getArrayIq();
  }, [filter]);
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setFilter(e.target.value);
      setShowModal(true);
    }
  }
  return (
    <section>
      <Link to="/" className="btn-home">
        Accueil
      </Link>
      <div className="search">
        <input
          type="text"
          name="name"
          placeholder="Tapez ici votre ville"
          onKeyPress={handleKeyDown}
        />
      </div>
      <Modal show={showModal}>
        <ModalBody>
          <ul style={{ textAlign: "justify" }}>
            {arrayIq.map((item) => (
              <div>
                <h2>{item.placeName}</h2>
                <li key={item.city}></li>
                <li>
                  <img
                    src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-wind-weather-smashingstocks-circular-smashing-stocks.png"
                    className="center"
                  />
                  <br />
                  Indice de Qualité de l'Air | {item.AQI}
                </li>
                <li>Monoxyde de Carbonne | {item.CO}</li>
                <li>Couche d'Ozone | {item.OZONE}</li>
                <li>
                  Particules en suspension
                  <br /> inférieur à 2,5 um | {item.PM10}
                </li>
                <li>
                  Particules en suspension
                  <br /> inférieur à 10 um | {item.PM25}
                </li>
                <li>Dioxyde de Sulfure | {item.SO2}</li>
                <li>Dioxyde de Nitrogène | {item.NO2}</li>
              </div>
            ))}
          </ul>
        </ModalBody>
        <ModalFooter>
          <button onClick={() => setShowModal(false)} className="modal-btn">
            Fermer
          </button>
        </ModalFooter>
      </Modal>
      <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="planet">
        <div class="planet-container">
          <div class="night"></div>
          <div class="day"></div>
          <div class="clouds"></div>
          <div class="inner-shadow"></div>
        </div>
      </div>
    </section>
  );
}
