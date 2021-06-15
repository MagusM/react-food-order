import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css'

const Input = React.forwardRef( (props, ref) => {
    const inpurRef = useRef();
    
    const activate = () => {
        inpurRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        };
    });

    return(
        <div className={classes.input}>
          <label htmlFor={props.input.id}> {props.label} </label>
          <input {...props.input} />
        </div>
    );

});

export default Input;