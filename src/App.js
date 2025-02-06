import { useState } from 'react';
import './App.css';



function Square( {value} ) {

  function handleClick(){
    return setVal("X"); // use state should now be set to X
  }
  // end of updating useState
  return <button 
            className='square'>
            {value}
          </button>;
}




export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
      
      
      return (
        <div className='board'>
          // Top of board
          <div className='board-row'>
            <Square value={squares[0]}  />
            <Square value={squares[1]} />
            <Square value={squares[2]} />
          </div>

          <div className='board-row'>
            <Square value={squares[3]} />
            <Square value={squares[4]} />
            <Square value={squares[5]} />
          </div>

          <div className='board-row'>
            <Square value={squares[6]} />
            <Square value={squares[7]} />
            <Square value={squares[8]} />
          </div>
          // End of board
        </div>
      )
}



