import React from 'react'
import { useState, useEffect } from "react"
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';



export default function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")


    //todos por default que le vamos a meter inicialmente al state
    // const initialTodos = [
    //     { id: 1, task: "tarea1", completed: false },
    //     { id: 2, task: "tarea2", completed: true },
    //     { id: 3, task: "tarea3", completed: false },
    // ];

    // *aqui estan todos los hooks que usamos
    // inicializando el state con los hooks
    const [todos, setTodos] = useState(initialTodos);
    // const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))

    }, [todos])


    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    };

    const removeTodo = (todoId) => {
        // filter el array para luego modificar el state (recuerda que filter regresa un array)
        const updatedTodo = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodo);
    };

    const toggleTodo = (todoId) => {
        const updatedTodo = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);

        setTodos(updatedTodo)
    }

    const editTodo = (todoId, newTaskText) => {
        const updatedTodo = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTaskText } : todo);
        console.log("corri")
        setTodos(updatedTodo)
    }

    return (
        // paper es como un background que se asemeja al papel de material ui, piensa que es como un contenedor para todo
        // de hecho el browser los renderiza como un div
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={3}>

            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODO App With Hooks and Material UI</Typography>
                </Toolbar>
            </AppBar>

            {/* el tema de grid es bastante parecido a los containers y row y columns de bootstrap */}
            <Grid container justifyContent={"center"} style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    {/* aqui va la el componente TodoForm para crear los Todos */}
                    <TodoForm addTodo={addTodo} />

                    {/* aqui ponemos nuestra lista de Todos con su componente TodoList */}
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />


                </Grid>
            </Grid>


        </Paper>

    )
}




// arquitectura
// TodoApp va a manejar el state para los todos
// - TodoForm
// - TodoList
//    -TodoItem

// cada TODO tendra minimo id, task, completed
// sera un array de objetos tal que [{id:1, task:"tarea1", completed:false}]