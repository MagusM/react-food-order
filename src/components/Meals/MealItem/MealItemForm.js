import React from 'react';

import classes from './MealItemForm.module.css'
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

const MealItemForm = (props) => {

    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
           <Button> + ADD </Button> 
        </form>
    );

}

export default MealItemForm;