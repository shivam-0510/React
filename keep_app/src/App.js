import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote"
import Note from "./Components/Note"
let App=()=>{
  
  const [addItem,setAddItem]=useState([]);
  let addNote=(note)=>{
    setAddItem((preValue)=>{
      return [...preValue,note]
    })
  }
  let onDelete=(id)=>{
  setAddItem((preValue)=>{
      return preValue.filter((currData,indx)=>{
        return indx !== id;
      })
    })
  }
  return(
    <>
      <Header/>
      <CreateNote passNote={addNote}/>
       {addItem.map((val,index)=>{
        return <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
       })}
      <Footer/>
    </>
  )
}
export default App;