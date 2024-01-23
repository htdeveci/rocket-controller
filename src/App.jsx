import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./shared/pages/Home";
import WeatherPanel from "./weather/components/WeatherPanel";
import RocketDetails from "./rockets/pages/RocketDetails";
import Header from "./shared/components/navigation/Header";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rocket/:rocketId" element={<RocketDetails />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );

  return (
    <>
      <Header />
      <div className="bodyContainer">
        <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
        <WeatherPanel />
      </div>
    </>
  );
}

export default App;
