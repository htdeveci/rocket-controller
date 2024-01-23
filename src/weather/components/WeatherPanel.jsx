import React, { useState } from "react";

import classes from "./WeatherPanel.module.css";
import DisplayWeather from "./DisplayWeather";

const WeatherPanel = () => {
  const [showWeatherPanel, setShowWeatherPanel] = useState(false);

  const toggleWeatherPanel = () => {
    setShowWeatherPanel((prevState) => !prevState);
  };

  return (
    <div
      className={`${classes.panelContainer} ${
        showWeatherPanel && classes.openWeatherPanel
      }`}
    >
      <div className={classes.toggleButton} onClick={toggleWeatherPanel}>
        <p className={classes.toggleButtonText}>Weather</p>
      </div>
      <div className={classes.weatherContainer}>
        <DisplayWeather />
      </div>
    </div>
  );
};

export default WeatherPanel;
