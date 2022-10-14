import React from 'react'
import { Paper, List, Divider, } from '@mui/material'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(props) {
    // <> cerrando con un </> es algo llamado react fragment que se usa para agrupar contenido sin crear nodos nuevos en el DOM, ver documentacion para mas detalles

    if (props.todos.length)
        return (

            <Paper>
                <List >
                    {props.todos.map((todo, i) => (
                        <React.Fragment key={todo.id}>
                            <TodoItem key={uuidv4()}
                                task={todo.task}
                                id={todo.id}
                                completed={todo.completed}
                                removeTodo={props.removeTodo}
                                toggleTodo={props.toggleTodo}
                                editTodo={props.editTodo} />
                            {i < props.todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>

            </Paper>
        );

    return null
}
