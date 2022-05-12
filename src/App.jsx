import "./App.css";
import MainComponent from "@components/MainComponent";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<MainComponent />} />
    </BrowserRouter>
  );
}
