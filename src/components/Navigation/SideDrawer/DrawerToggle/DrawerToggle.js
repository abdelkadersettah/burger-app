import classes from './DrawerToggle.module.css';
const drawerToggle = (props) => {
  return (
    <div onClick={props.clicked} className={classes.Hamburger}>
      <button className={classes.HamburgerBtn}></button>
    </div>
  );
};

export default drawerToggle;
