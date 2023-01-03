import React, {useState} from 'react';
import Board from './Components/Board';
import ScoreBoard from './Components/ScoreBoard';
import ResetButton from './Components/ResetButton';
import './App.css';


function App() {
  //Defining the win condition
  const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  //Instead of having constant list we have used State
  //Having null values at beginning
  const [board, setBoard] = useState (Array(9).fill(null))  

  //X will start the game
  const [xPlaying , setXPlaying] = useState(true);

  //To keep track of scores
  const [scores , setScores] = useState({xScores:0, oScores:0})


  const [gameOver,setGameOver] = useState(false)

  //We created a function which takes index of which box is clicked
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, index)=>{
      if(index === boxIdx){
        return xPlaying === true ? "X" : "O";
      }else{
        return value;
      }
    })
    const winner = checkWinner(updatedBoard);
    //if winner exist
    if(winner){
      //check who is winner
      if(winner === "O"){
        //Extracting  oscores from score
        let {oScores} = scores;
        oScores += 1;
        //Updated keeping other value same
        setScores({...scores,oScores})
      }else{        
        let {xScores} = scores;
        xScores += 1;
        setScores({...scores,xScores})
      }

    }
    //Updating the Board
    setBoard(updatedBoard);

    //For changing the player
    setXPlaying(!xPlaying);  
  }


  const checkWinner = (board) => {
    for(let i=0;i<winCondition.length;i++){
      const[x,y,z] = winCondition[i];
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        setGameOver(true)
        return board[x];
      }
    }  
  }

  const resetBoard = () => {
     setGameOver(false)
     setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard={resetBoard} />       
    </div>
  );
}

export default App;
