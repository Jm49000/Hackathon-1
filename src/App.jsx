import "./App.css";
import MainComponent from "@assets/components/MainComponent";
import HomePage from "@assets/components/HomePage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wildearth" element={<MainComponent />} />
      </Routes>
    </section>
  );
}
