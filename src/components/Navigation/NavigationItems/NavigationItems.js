import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import { Link } from 'react-router-dom';
const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/">
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
