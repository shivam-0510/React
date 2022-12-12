import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
let Dec=(props)=>{
    return(
        <>
            <div className="dec">
                <Button onClick={props.dec} variant="contained"><RemoveIcon/></Button>
            </div>
        </>
    )
}
export default Dec;