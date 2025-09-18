import { useState } from "react";
import CelsiusInput from "./components/CelsiusInput";
import WeatherMessage from "./components/WeatherMessage";
import "./index.css";

function App() {
  const [weather, setWeather] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-emerald-600 to-green-400 min-h-screen flex items-center justify-center">
      <div className="bg-white text-gray-800 rounded-2xl shadow-xl w-full max-w-md p-8">
        <CelsiusInput value={weather} onChangeTemp={setWeather} />
        <WeatherMessage temp={weather} />
      </div>
    </div>
  );
}

export default App;
