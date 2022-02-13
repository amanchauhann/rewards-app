import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import'./Todo.css';


function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Deadline⏲️" />
            </ListItem>
        </List>
)
}

export default Todo