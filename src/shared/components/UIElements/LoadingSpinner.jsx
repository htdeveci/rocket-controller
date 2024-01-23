import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ fullPage = true }) => {
  return (
    <div className={classes.container}>
      <span
        className={`${classes.loader} ${fullPage && classes.fullPage}`}
      ></span>
    </div>
  );
};

export default LoadingSpinner;
