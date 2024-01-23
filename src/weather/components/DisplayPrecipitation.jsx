import Card from "../../shared/components/UIElements/Card";
import { getRoundedFloat } from "../../shared/utils/data-formatter";

const DisplayPrecipitation = ({ precipitationData }) => {
  return (
    <Card header="Precipitation">
      {precipitationData.hail && <p>Hail</p>}
      {precipitationData.rain && <p>Rain</p>}
      {precipitationData.sleet && <p>Sleet</p>}
      {precipitationData.snow && <p>Snow</p>}
      <p>Probability: {getRoundedFloat(precipitationData.probability)}</p>
    </Card>
  );
};

export default DisplayPrecipitation;
