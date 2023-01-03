import React from 'react';
import Box from './Box';
import './Board.css';

//We are accepting props to iterate
function Board({board, onClick}) {
  return (
    //We want to iterate through the list we created in app.js and render this value so we created new component
    <div className='board'>
       {/* Iterating and mapping to box component and also taking index we are at and returning new component*/}
       {board.map((value,index)=>{
            return <Box value={value} onClick={()=>value===null && onClick(index)}/>
       })}     
    </div>
  )
}

export default Board;
