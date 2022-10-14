import React from 'react'
import TodoEditItem from './TodoEditItem';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggle from './hooks/useToggle.js';





export default function TodoItem(props) {

    const { id, task, completed, removeTodo, editTodo } = props;

    const [isEditing, toggleIsEditing] = useToggle(false);


    const handleDelete = () => {
        removeTodo(id)
    }

    let renderThis = <React.Fragment>
        <Checkbox checked={completed} onChange={() => { props.toggleTodo(id) }} />
        <div style={{ width: "80%" }}>
            <ListItemText
                sx={{ wordWrap: "break-word" }}
                style={{ textDecoration: completed ? "line-through" : "none" }}
                primary={<React.Fragment>
                    {task}
                </React.Fragment>}
                primaryTypographyProps={{ noWrap: false }}>

            </ListItemText>
        </div>

        <ListItemSecondaryAction>
            <IconButton edge="end" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
            <IconButton edge="end" onClick={toggleIsEditing}>
                <EditIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </React.Fragment>

    if (isEditing) {
        renderThis = <React.Fragment>
            <TodoEditItem id={id} task={task} editTodo={editTodo} toggleIsEditing={toggleIsEditing} />
            {/* <ListItemSecondaryAction>
                <IconButton onClick={editTodo}>
                    <SaveIcon />
                </IconButton>
                <IconButton onClick={toggleIsEditing}>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction> */}
        </React.Fragment>
    }

    return (
        <ListItem>
            {renderThis}
            {/* <Checkbox checked={completed} onChange={() => { props.toggleTodo(id) }} />
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction> */}
        </ListItem>
    )
}
