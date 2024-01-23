import { useState, useEffect } from "react";

import classes from "./Button.module.css";
import { REFRESH_RATE_MS } from "../../utils/global-constants";

const Button = ({
  onClick,
  children,
  disabled = false,
  refreshable = false,
}) => {
  const [passedTimeForRefresh, setPassedTimeForRefresh] = useState(0);

  useEffect(() => {
    if (refreshable) {
      const timer = setInterval(() => {
        if (passedTimeForRefresh >= REFRESH_RATE_MS) onClickHandler();
        else setPassedTimeForRefresh((prevState) => prevState + 100);
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [passedTimeForRefresh]);

  const onClickHandler = () => {
    if (refreshable) {
      setPassedTimeForRefresh(0);
    }
    onClick();
  };

  return (
    <button
      className={classes.button}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
      {refreshable && (
        <progress
          className={classes.progress}
          value={passedTimeForRefresh}
          max={REFRESH_RATE_MS}
        />
      )}
    </button>
  );
};

export default Button;
