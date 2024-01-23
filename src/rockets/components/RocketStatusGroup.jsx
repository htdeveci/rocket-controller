import classes from "./RocketStatusGroup.module.css";
import Rocket from "./rocket";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const RocketStatusGroup = ({ statusHeader, rocketGroup, isLoading }) => {
  return (
    <>
      {rocketGroup.length > 0 && (
        <div className={classes.container}>
          <header className={classes.header}>
            {statusHeader} {isLoading && <LoadingSpinner fullPage={false} />}
          </header>
          <div className={classes.rocketsPanel}>
            {rocketGroup.map((rocket, index) => {
              return <Rocket key={index} rocketData={rocket} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default RocketStatusGroup;
