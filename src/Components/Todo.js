import React from 'react'
import '../Components/Css/Todo.css'
import { List, ListItem, ListItemText, ImageIcon, Avatar, ListItemAvatar,Button } from '@material-ui/core'
import db from './Firebase/firebase'
import DeleteIcon from '@material-ui/icons/Delete';
function Todo(props) {
    return (
        <div>
            <List className='todo__list'>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    {/* //as later we make it an object */}
                    <ListItemText primary={props.todo.todo} secondary='Dummy Deadline 🕗 ' />
                </ListItem>
                <Button onClick={e=>db.collection('todos').doc(props.todo.id).delete()}>
                    <DeleteIcon/></Button>
            </List>
        </div>
    )
}

export default Todo
