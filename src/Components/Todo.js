import React from 'react'
import '../Css/Todo.css'
import { List, ListItem, ListItemText, ImageIcon, Avatar, ListItemAvatar } from '@material-ui/core'

function Todo(props) {
    return (
        <div>
            <List className='todo__list'>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo} secondary='Dummy Deadline 🕗 ' />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
