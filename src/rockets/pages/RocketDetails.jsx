import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./RocketDetails.module.css";
import { useRocketsData } from "../../shared/hooks/rocket-hook";
import Button from "../../shared/components/UIElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { getColorByRocketStatus } from "../../shared/utils/colors";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { getFormattedDateTime } from "../../shared/utils/data-formatter";

const RocketDetails = () => {
  const rocketId = useParams().rocketId;
  const [rocket, setRocket] = useState(null);

  const {
    rockets,
    refreshRocketData,
    launchRocket,
    deployRocket,
    cancelLaunch,
    isLoading,
    error,
  } = useRocketsData();

  useEffect(() => {
    if (error && !isLoading) refreshRocketData();
  }, [error]);

  useEffect(() => {
    if (!!rockets) findRocketById();
  }, [rockets]);

  const findRocketById = () => {
    setRocket(rockets.find((rocket) => rocket.id === rocketId));
  };

  const rocketLaunchHandler = async () => {
    try {
      const updatedRocket = await launchRocket(rocketId);
      setRocket(updatedRocket);
    } catch (err) {}
  };

  const rocketDeployHandler = async () => {
    try {
      const updatedRocket = await deployRocket(rocketId);
      setRocket(updatedRocket);
    } catch (err) {}
  };

  const rocketCancelLaunchHandler = async () => {
    try {
      const updatedRocket = await cancelLaunch(rocketId);
      setRocket(updatedRocket);
    } catch (err) {}
  };

  return (
    <>
      {isLoading && !rocket && <LoadingSpinner />}

      {!!rocket && (
        <>
          <Card
            header={rocket.model}
            headerBackgroundColor={getColorByRocketStatus(rocket.status)}
          >
            {isLoading && <LoadingSpinner fullPage={false} />}

            <div className={classes.areaContainer}>
              <p>
                <b>General Infos</b>
              </p>
              <p>ID: {rocket.id}</p>
              <p>Mass: {rocket.mass}</p>
              <p>Altitude: {rocket.altitude}</p>
              <p>Temperature: {rocket.temperature}</p>
            </div>

            <div className={classes.areaContainer}>
              <p>
                <b>Payload</b>
              </p>
              {rocket.payload.description}
              <p>Weight: {rocket.payload.weight}</p>
            </div>

            <div className={classes.areaContainer}>
              <p>
                <b>Forces</b>
              </p>
              <p>Speed: {rocket.speed}</p>
              <p>Acceleration: {rocket.acceleration}</p>
              <p>Thrust: {rocket.thrust}</p>
            </div>

            <div className={classes.areaContainer}>
              <p>
                <b>Last Status Updates</b>
              </p>
              <p>
                Launched: {getFormattedDateTime(rocket.timestamps.launched)}
              </p>
              <p>
                Deployed: {getFormattedDateTime(rocket.timestamps.deployed)}
              </p>
              <p>Failed: {getFormattedDateTime(rocket.timestamps.failed)}</p>
              <p>
                Cancelled: {getFormattedDateTime(rocket.timestamps.cancelled)}
              </p>
            </div>

            <p>
              <b>Current Status: {rocket.status.toUpperCase()}</b>
            </p>

            <div className={classes.buttonsContainer}>
              <Button onClick={refreshRocketData} refreshable>
                Refresh
              </Button>

              <Button
                onClick={rocketLaunchHandler}
                disabled={rocket.status === "launched"}
              >
                Launch
              </Button>

              <Button
                onClick={rocketDeployHandler}
                disabled={rocket.status === "deployed"}
              >
                Deploy
              </Button>

              <Button
                onClick={rocketCancelLaunchHandler}
                disabled={rocket.status !== "launched"}
              >
                Cancel Launch
              </Button>
            </div>
          </Card>
        </>
      )}

      {!isLoading && !error && !rocket && <p>Rocket is not found.</p>}
    </>
  );
};

export default RocketDetails;
