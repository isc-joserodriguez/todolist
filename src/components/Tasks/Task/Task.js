import React from 'react';

const Task = props => {
    const taskChangedHandler = event => {
        event.preventDefault();
        props.updateState(props.id);
    }
    return (
        <div onClick={taskChangedHandler}>
            <label style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>{props.task}</label>
        </div>
    )
}

export default Task
