import React from "react";
import { useState } from "react";
import List from "./List";
let Card=()=>{
    const [currItem,setItem]=useState(" ");
    const [items,setItems]=useState([]);
    let showItem=(e)=>{
        setItem(e.target.value);
    }
    let addItem=()=>{ 
        setItems((preValue)=>{
            return [...preValue,currItem]
        })
        setItem(" ");
    }
    let deleteItem=(id)=>{
        setItems((preValue)=>{
            return preValue.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }
    return(
        <>
            <div className="container">
                <h1 className="heading">ToDo List</h1>
                <div className="add-list">
                    <input type="text" placeholder="Add a Item" onChange={showItem} value={currItem}/>
                    <button className="btn" onClick={addItem}>Add</button>
                </div>
                <ul>
                    {/* <li>{currItem}</li> */}
                    {items.map((val,index)=>{
                        return <List
                            key={index}
                            id={index}
                            text={val}
                            onSelect={deleteItem}
                        />
                    })}
                </ul>
            </div>
            
        </>
    )
}
export default Card;