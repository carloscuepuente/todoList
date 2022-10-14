import React from 'react'
import { Paper, TextField } from '@mui/material'
import useInputState from './hooks/useInputState'

export default function TodoForm(props) {

    const [task, taskChange, resetTask] = useInputState("")

    const addTodo = props.addTodo

    return (

        <Paper style={{ margin: "1rem 0", padding: "0 0" }}>
            <form onSubmit={(event) => {
                event.preventDefault();
                addTodo(task);
                resetTask()
            }}>
                <TextField fullWidth label="Add New Todo" value={task} onChange={taskChange} />
            </form>


        </Paper>

    )
}
