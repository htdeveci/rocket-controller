import { useNavigate } from "react-router-dom";

import classes from "./Rocket.module.css";
import Card from "../../shared/components/UIElements/Card";
import { getColorByRocketStatus } from "../../shared/utils/colors";

const Rocket = ({ rocketData }) => {
  const navigate = useNavigate();

  const rocketClickHandler = () => {
    navigate(`/rocket/${rocketData.id}`);
  };

  return (
    <Card
      header={rocketData.model}
      headerBackgroundColor={getColorByRocketStatus(rocketData.status)}
      onClick={rocketClickHandler}
      containerClassName={classes.container}
    >
      <p>ID: {rocketData.id}</p>
      <p>Mass: {rocketData.mass}</p>
      <p>Altitude: {rocketData.altitude}</p>
      <p>Temperature: {rocketData.temperature}</p>
      <p>Speed: {rocketData.speed}</p>
      <p>Acceleration: {rocketData.acceleration}</p>
    </Card>
  );
};
export default Rocket;
