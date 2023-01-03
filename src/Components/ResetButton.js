import React from 'react';
import './ResetButton.css';
function ResetButton({resetBoard}) {
  return (
    <div>
       <button className='reset' onClick={resetBoard}>Reset</button>
    </div>
  )
}
export default ResetButton;
