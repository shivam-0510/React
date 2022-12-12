import React, { useState } from "react";
import Inc from "./Inc";
import Dec from "./Dec";
import Box from '@mui/material/Box';
let Card=()=>{
    const [currValue,setValue]=useState(0);
    let incValue=()=>{
        setValue(currValue+1);
    }
    let decValue=()=>{
        if(currValue===0){
            setValue(0);
            return;
        }
        setValue(currValue-1);
    }
    return(
        <>
            <Box  sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.dark'
                    }}
                    className="container">
                <div className="heading">
                    <h1>{currValue}</h1>
                </div>
                <div className="btn">
                    <Inc inc={incValue}/>
                    <Dec dec={decValue}/>
                </div>
            </Box>
        </>
    )
}
export default Card;