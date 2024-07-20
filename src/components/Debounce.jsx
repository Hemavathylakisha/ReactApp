import React from 'react';

function Debounce() {
    const myDebounce = (cb,d) => {
        let timer;
        return function (...args){
            if(timer) clearTimeout(timer)
            timer = setTimeout(()=>{
                cb(...args)
            },d)
        }
    }

const handleChange = myDebounce((e) => {
        console.log(e.target.value)
 },1000)
 
  return (
    <div>
      <input type="search" onChange={handleChange} />
    </div>
  );
}

export default Debounce;
