import React,{useState} from 'react'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import {List,ListItem,ListItemText,Modal,Button,ListItemAvatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
    const [open,setOpen]=useState(false);
    const [input,setInput]=useState();

    const classes = useStyles();
    const handleOpen  = ()=>{
        setOpen(true);
    };
    const handleClose= ()=>{
        setOpen(false);
    }
    const updateTodo=()=>{
        db.collection('todos').doc(props.todo.id).set({
            todo:input
        },{merge:true})
        setOpen(false);
    }  
    return (
        <div>
            <Modal 
            open={open}
            onClose={e=>setOpen(false)}>
                <div  className={classes.paper}>
                    <h1>Open</h1>
                    <input value={input} placeholder={props.todo.todo} onChange={event=> setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update</Button>
                </div>
            </Modal>
            <List className="todo_list">

                <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Dealine"/>
                </ListItem>
                <button onClick={e=>setOpen(true)}>Edit</button>
                <DeleteIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/> 
            </List>

        </div>
    )
}

export default Todo
