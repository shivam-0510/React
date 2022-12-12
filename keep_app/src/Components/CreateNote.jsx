import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import AddIcon from '@mui/icons-material/Add';
let CreateNote=(props)=>{
    const [expand,setExpand]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:"",
    })
let inputEvent=(e)=>{
    const {name,value}=e.target;
    setNote((preValue)=>{
        return{
            ...preValue,
            [name]:value
        }
    })
}
let addEvent=()=>{
    props.passNote(note);
    setNote({
        title:"",
        content:""
    })
}
let expandIt=()=>{
    setExpand(true);
}
let shrinkIt=()=>{
    setExpand(false)
}
    return(
        <>
            <div className="main_note" onDoubleClick={shrinkIt}>
                <form>
                    {expand?
                    <input type='text' placeholder="Title" value={note.title} onChange={inputEvent} name="title" autoComplete="off"/>:null}
                    <textarea rows='' column='' placeholder='Write a note..' onClick={expandIt} onChange={inputEvent} name="content" value={note.content}/>
                    {expand?<Button onClick={addEvent} className="btn"
                    style={{width:30,boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:100,marginLeft:330,marginBottom:'-50px',backgroundColor:'white'}}
                    >
                        <AddIcon style={{color:"#ffb703"}}></AddIcon>
                    </Button>:null}
                </form>
            </div>
        </>
    )
}
export default CreateNote; 