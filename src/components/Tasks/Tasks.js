import React from 'react';
import Task from './Task/Task';
import classes from './Tasks.module.css';

const Tasks = props => {
    let tasksList = null;
    const { tasks } = { ...props };
    if (tasks.length > 0)
        tasksList = tasks.map(task => <Task
            key={task.id}
            id={task.id}
            task={task.task}
            completed={task.state}
            updateState={props.updateState}
        />);
    return (
        <div className={classes.Tasks}>
            {tasksList}
        </div>
    )
}

export default Tasks;
