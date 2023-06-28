import rockA from './images/rockA.png'
import paperA from './images/paperA.png';
import scissorsA from './images/scissorsA.png';
import lizardA from './images/lizardA.png';
import spockA from './images/spockA.png';
import rockB from './images/rockB.png';
import paperB from './images/paperB.png';
import scissorsB from './images/scissorsB.png';
import lizardB from './images/lizardB.png';
import spockB from './images/spockB.png';
import { useState, useEffect } from 'react';
import './Game.css';


const playerA = [
  { id: 0, name: "Rock", img: rockA, wins: [3, 2]},
  { id: 1, name: "Paper", img: paperA, wins: [0, 4]},
  { id: 2, name: "Scissors", img: scissorsA, wins: [1, 3]},
  { id: 3, name: "Lizard", img: lizardA, wins: [4, 1]},
  { id: 4, name: "Spock", img: spockA, wins: [2, 0]}
]

const playerB = [
  { id: 0, name: "Rock", img: rockB, wins: [3, 2]},
  { id: 1, name: "Paper", img: paperB, wins: [0, 4]},
  { id: 2, name: "Scissors", img: scissorsB, wins: [1, 3]},
  { id: 3, name: "Lizard", img: lizardB, wins: [4, 1]},
  { id: 4, name: "Spock", img: spockB, wins: [2, 0]}
]

function Game({isOnePlayer}) {

  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'a':
          setPlayerOneChoice(0);
          break;
        case 's':
          setPlayerOneChoice(1);
          break;
        case 'd':
          setPlayerOneChoice(2);
          break;
        case 'w':
          setPlayerOneChoice(3);
          break;
        case 'e':
          setPlayerOneChoice(4);
          break;
        case 'j':
          setPlayerTwoChoice(0);
          break;
        case 'k':
          setPlayerTwoChoice(1);
          break;
        case 'l':
          setPlayerTwoChoice(2);
          break;
        case 'i':
          setPlayerTwoChoice(3);
          break;
        case 'o':
          setPlayerTwoChoice(4);
        default:
          break;
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);


  return (
    <div className="App">
      <div className="playerOne">
        {playerA.map((opcion) => {
          <button
            key={opcion.id}
            onClick={() => handleKeyPress()}
            title={opcion.name}
          ></button>
        })}
        <img src={rockA} />
        <img src={paperA} />
        <img src={scissorsA} />
        <img src={lizardA} />
        <img src={spockA} />
      </div>


      <div className='playerTwo'>
        <img src={rockB} />
        <img src={scissorsB} />
        <img src={paperB} />
        <img src={lizardB} />
        <img src={spockB} />
      </div>

      {playerOneChoice && <p>Opción seleccionada por jugador uno es : {playerOneChoice}</p>}
      {playerTwoChoice && <p>Opción seleccionada por jugador dos es : {playerTwoChoice}</p>}
    </div>
  );
}

export default Game;
