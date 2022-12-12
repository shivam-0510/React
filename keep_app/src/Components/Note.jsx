import React from "react";
import Button from '@material-ui/core/Button'

import DeleteOutlineIcon from '@mui/icons-material/Delete';
let Note=(props)=>{
    let deleteitem=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
            <div className="container">
                <div className="note">
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>
                        <Button onClick={deleteitem} style={{width:30,borderRadius:100 ,marginBottom:"-40px",marginLeft:200,boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:'white'}}>
                            <DeleteOutlineIcon className="deleteIcon" style={{color:"#ffb703"}}/>
                        </Button>
                    </div>
            </div> 
        </>
    )
}
export default Note;