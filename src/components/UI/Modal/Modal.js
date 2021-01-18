import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modul.module.css';

const Modal = React.memo(
  (props) => {
    return (
      <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div
          className={classes.Modal}
          style={{
            transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
            opacity: props.show ? '1' : '0',
          }}
        >
          {props.children}
        </div>
      </React.Fragment>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.show === nextProps.show &&
      prevProps.children === nextProps.children
    );
  }
);

export default Modal;
