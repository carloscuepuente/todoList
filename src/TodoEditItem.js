import React from 'react'
import { TextField } from '@mui/material'
import { IconButton, ListItemSecondaryAction } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import useInputState from './hooks/useInputState'

export default function TodoEditItem(props) {

    const [value, handleChange, reset] = useInputState(props.task);
    const { id, editTodo, toggleIsEditing } = props

    const handleSaveClick = () => {
        editTodo(id, value)
    }

    return (
        <form style={{ width: "90%" }} onSubmit={(event) => {
            event.preventDefault();
            editTodo(id, value);
            reset();
            toggleIsEditing()
        }}>
            <TextField multiline maxRows={5} fullWidth autoFocus value={value} onChange={handleChange} />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={handleSaveClick}>
                    <SaveIcon />
                </IconButton>
                <IconButton edge="end" onClick={toggleIsEditing}>
                    <CancelIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </form>
    )
}
