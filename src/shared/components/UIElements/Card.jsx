import classes from "./Card.module.css";

const Card = ({
  header,
  containerClassName,
  children,
  headerClassName,
  headerBackgroundColor,
  onClick = null,
}) => {
  const backgroundColorStyle = headerBackgroundColor && {
    backgroundColor: headerBackgroundColor,
  };
  const cursorStyle = onClick && { cursor: "pointer" };

  return (
    <div
      className={`${classes.card} ${containerClassName}`}
      onClick={onClick}
      style={{ ...cursorStyle }}
    >
      <label
        className={`${classes.header} ${headerClassName}`}
        style={{ ...backgroundColorStyle, ...cursorStyle }}
      >
        {header}
      </label>
      <div className={classes.childrenContainer}>{children}</div>
    </div>
  );
};

export default Card;
