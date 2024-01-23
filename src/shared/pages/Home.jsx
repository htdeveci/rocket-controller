import React, { useEffect, useState } from "react";

import classes from "./Home.module.css";
import Button from "../components/UIElements/Button";
import { useRocketsData } from "../hooks/rocket-hook";
import LoadingSpinner from "../components/UIElements/LoadingSpinner";
import RocketStatusGroup from "../../rockets/components/RocketStatusGroup";

const Home = () => {
  const {
    rockets: rocketsData,
    refreshRocketData,
    isLoading,
    error,
  } = useRocketsData();
  const [rocketsWaiting, setRocketsWaiting] = useState([]);
  const [rocketsLaunched, setRocketsLaunched] = useState([]);
  const [rocketsDeployed, setRocketsDeployed] = useState([]);
  const [rocketsCanceled, setRocketsCanceled] = useState([]);

  useEffect(() => {
    if (!!rocketsData) {
      setRocketsWaiting([]);
      setRocketsLaunched([]);
      setRocketsDeployed([]);
      setRocketsCanceled([]);

      rocketsData.forEach((rocket) => {
        switch (rocket.status) {
          case "waiting":
            setRocketsWaiting((prevState) => [...prevState, rocket]);
            break;
          case "launched":
            setRocketsLaunched((prevState) => [...prevState, rocket]);
            break;
          case "deployed":
            setRocketsDeployed((prevState) => [...prevState, rocket]);
            break;
          case "cancelled":
            setRocketsCanceled((prevState) => [...prevState, rocket]);
            break;
          default:
            break;
        }
      });
    }
  }, [rocketsData]);

  useEffect(() => {
    if (error && !isLoading) refreshRocketData();
  }, [error]);

  return (
    <>
      {isLoading && !rocketsData && <LoadingSpinner />}

      {((!error && rocketsWaiting.length > 0) ||
        rocketsLaunched.length > 0 ||
        rocketsDeployed.length > 0 ||
        rocketsCanceled.length > 0) && (
        <div className={classes.outerPanel}>
          <RocketStatusGroup
            statusHeader="Waiting"
            rocketGroup={rocketsWaiting}
            isLoading={isLoading}
          />

          <RocketStatusGroup
            statusHeader="Launched"
            rocketGroup={rocketsLaunched}
            isLoading={isLoading}
          />

          <RocketStatusGroup
            statusHeader="Deployed"
            rocketGroup={rocketsDeployed}
            isLoading={isLoading}
          />

          <RocketStatusGroup
            statusHeader="Cancelled"
            rocketGroup={rocketsCanceled}
            isLoading={isLoading}
          />

          <Button onClick={refreshRocketData} refreshable>
            Yenile
          </Button>
        </div>
      )}
    </>
  );
};

export default Home;
