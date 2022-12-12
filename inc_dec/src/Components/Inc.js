import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
let Inc=(props)=>{
    return(
        <>
            <div className="inc">
                <Button onClick={props.inc} variant="contained"><AddIcon/></Button>
            </div>
        </>
    )
}
export default Inc;