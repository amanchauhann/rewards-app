import { Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import'./Todo.css';
import db from'./firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Todo(props) {

    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Deadline⏲️" />
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            {/* <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>🗑️</Button> */}
        </List>
)
}

export default Todo