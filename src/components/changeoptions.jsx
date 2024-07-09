import React from 'react';
import {useState} from "react";

function Changeoptions() {
    const options = ["Cricket", "Football", "Hockey"];
    const days = ["Weekdays", "Weekend"];
    
    const[game,setGame]= useState('');
    const[day,setDay]= useState('');
    
  return (
    <div>
       <h2>Which Game Want to play?</h2>
     {
      options.map((items,index)=>{
        return (
          <>
          <input type="radio" value={items} id={items} name="options"
          onChange={(e)=> setGame(e.target.value)} />
          <label for="options">{items}</label>
          </>
        )
      })
     }
     <h2>Select Your Days</h2>
     {
      days.map((val,index)=>{
        return (
          <>
          <input type="radio" value={val} id={val} name="days"
          onChange={(e)=> setDay(e.target.value)} />
          <label for="days">{val}</label>
          </>
        )
      })
     }
     <p>You Can play {game} on {day}..</p>
    </div>
  );
}

export default Changeoptions;
