import Card from "../../shared/components/UIElements/Card";
import { getRoundedFloat } from "../../shared/utils/data-formatter";

const DisplayWind = ({ windData }) => {
  return (
    <>
      {windData && (
        <Card header="Wind">
          <p>Direction: {windData.direction}</p>
          <p>Angle: {getRoundedFloat(windData.angle)}</p>
          <p>Speed: {getRoundedFloat(windData.speed)}</p>
        </Card>
      )}
    </>
  );
};

export default DisplayWind;
