import React,{useState} from 'react'
import '../Components/Css/Todo.css'
import { List, ListItem, ListItemText, ImageIcon, Avatar, ListItemAvatar,Button, Modal ,makeStyles} from '@material-ui/core'
import db from './Firebase/firebase'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {
    let classes = useStyles();
    let [open,setOpen] = useState(false);
    let [input,setInput] = useState();
    let handleOpen = () =>{
        setOpen(true);
    };
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo:input,
        },{merge:true});
        setOpen(false);
    }
    return (
        <>
        <Modal open={open} onClose={e=>setOpen(false)}>
            <div className={classes.paper}>
                <h1>i am a Modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                <Button  onClick={updateTodo}>Update</Button>
            </div>
        </Modal>
            <List className='todo__list'>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>

                        </Avatar>
                    </ListItemAvatar>
                    {/* //as later we make it an object */}
                    <ListItemText primary={props.todo.todo} secondary='Dummy Deadline 🕗 ' />
                </ListItem>
                <button onClick={e=>setOpen(true)}>Edit Me</button>
                <Button onClick={e=>db.collection('todos').doc(props.todo.id).delete()}>
                    <DeleteIcon/></Button>
            </List>
        </>
    )
}

export default Todo
