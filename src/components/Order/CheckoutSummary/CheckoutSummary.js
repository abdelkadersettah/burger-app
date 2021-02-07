import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it testes well</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
        <Button clicked={props.checkoutCancelled} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={props.checkoutContinued} btnType="Success">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
