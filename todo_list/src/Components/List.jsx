import React from "react";
let List=(props)=>{
    
    return(
        <>
            <div className="cnt-2">
                <li>{props.text}</li>
                <button className="btn-2" onClick={()=>{
                    props.onSelect(props.id)
                }}>Delete</button>
            </div>
            
        </>
    )
}
export default List