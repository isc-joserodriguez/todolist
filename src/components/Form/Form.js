import React from 'react';
import classes from './Form.module.css';

const Form = props => {
    const inputChangedHandler = event => {
        props.updateInput(event.target.value);
    }

    const newTaskSubmit = event => {
        event.preventDefault();
        if (props.value.task === '') return;
        props.submited();
        props.updateInput('');
    }

    return (
        <form onSubmit={newTaskSubmit} className={classes.Form}>
            <input placeholder='New task...' onChange={inputChangedHandler} type="text" value={props.value.task} />
            <button disabled={props.value.task === ''} >Add</button>
        </form>
    )
}

export default Form;
