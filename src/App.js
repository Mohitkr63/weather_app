import WeatherData from "./components/WeatherData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
