import React from "react";
import { useState } from "react";
let App=()=>{
  let time=new Date().toLocaleTimeString();
  const [currTime,setTime]=useState(time);
  let updateTime=()=>{
    let newTime=new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime,1000)
  return(
    <>
      <h1>{currTime}</h1>
    </>
  )
}

export default App;