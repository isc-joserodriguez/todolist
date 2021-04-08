import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import Tasks from '../../components/Tasks/Tasks';
import classes from './List.module.css';

const List = () => {
    const [newTask, setnewTask] = useState({ task: '' });
    const [tasks, setTasks] = useState([]);

    const updateNewTaskValue = task => {
        setnewTask({
            id: new Date().getTime(),
            task: task,
            state: false
        })
    }

    const addNewTask = () => {
        setTasks([...tasks, newTask]);
    }

    const toggleTask = id => {
        let taskIndex = 0, changedTasks = [...tasks];
        changedTasks.forEach((task, index) => {
            if (task.id === id) taskIndex = index;
        });
        changedTasks[taskIndex].state = !changedTasks[taskIndex].state;
        console.log(changedTasks[taskIndex].state);
        setTasks(changedTasks);
    }

    return (
        <div className={classes.List}>
            <Form
                updateInput={updateNewTaskValue}
                submited={addNewTask}
                value={newTask}
            />
            <Tasks id={tasks.id} tasks={tasks} updateState={toggleTask} />
        </div>
    )
}

export default List;
