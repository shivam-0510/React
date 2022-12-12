import React from "react";
import NotesIcon from '@mui/icons-material/Notes';
let Header=()=>{
    return(
        <>
            <div className="header">
                <div className="heading">
                    <NotesIcon style={{color:"white"}} />
                    <h1>Keep App</h1>
                </div>
            </div>
        </>
    )
}
export default Header;