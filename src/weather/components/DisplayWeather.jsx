import React, { useCallback, useEffect, useState } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import DisplayWind from "./DisplayWind";
import {
  getFormattedDateTime,
  getRoundedFloat,
} from "../../shared/utils/data-formatter";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import DisplayPrecipitation from "./DisplayPrecipitation";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const DisplayWeather = () => {
  const [weatherData, setweatherData] = useState(null);
  const { sendRequest, isLoading, error, clearError } = useHttpClient();

  const fetchWeatherData = useCallback(async () => {
    try {
      const responseData = await sendRequest("weather");
      setweatherData(responseData);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (error) {
      clearError();
      fetchWeatherData();
    }
  }, [error]);

  return (
    <div style={{ minHeight: "50vh" }}>
      {isLoading && <LoadingSpinner />}

      {!isLoading && weatherData && (
        <>
          <Card header={"Weather"}>
            <p>Temperature: {getRoundedFloat(weatherData.temperature)}</p>
            <p>Humidity: {getRoundedFloat(weatherData.humidity)}</p>
            <p>Pressure: {getRoundedFloat(weatherData.pressure)}</p>
          </Card>

          <DisplayPrecipitation precipitationData={weatherData.precipitation} />
          <DisplayWind windData={weatherData.wind} />

          <p style={{ color: "black" }}>
            Updated: {getFormattedDateTime(weatherData.time)}
          </p>

          <Button onClick={fetchWeatherData} refreshable>
            Yenile
          </Button>
        </>
      )}
    </div>
  );
};

export default DisplayWeather;
