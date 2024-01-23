import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <a className={classes.homeLink} href="/">
        Rocket Controller
      </a>
    </div>
  );
};

export default Header;
