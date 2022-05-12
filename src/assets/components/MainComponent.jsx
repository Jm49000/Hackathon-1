import "../components/sass/MainComponent.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
export default function MainComponent() {
  const [arrayIq, setArrayIq] = useState([]);
  const [filter, setFilter] = useState("");
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
    }
  }
  return (
    <section>
      <div className="search">
        <input
          type="text"
          name="name"
          placeholder="Tapez ici votre ville et appuiyez sur entrer"
          onKeyPress={handleKeyDown}
        />
      </div>
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
      <ul>
        {arrayIq.map((item) => {
          return <Modal key={item} />;
        })}
      </ul>
    </section>
  );
}
