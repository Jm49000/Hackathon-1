import "./App.css";
import MainComponent from "@assets/components/MainComponent";
import HomePage from "@assets/components/HomePage";
import { Routes, Route } from "react-router-dom";
import ContactForm from "@components/ContactForm";

export default function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wildearth" element={<MainComponent />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </section>
  );
}
