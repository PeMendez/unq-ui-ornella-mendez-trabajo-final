import GameOptions from './GameOptions'
import { useState, useEffect } from 'react';
import './Game.css';



function Game() {

  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);


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

  useEffect(() => {

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);


  return (
    <div className="App">
      <div className="playerOne">
        {GameOptions.map((opcion) => (
          // <button
          //   key={opcion.id}
          //   onClick={() => handleKeyPress()}
          //   title={opcion.name}
          // >
          //   {opcion.img}
          // </button>
          <img src={opcion.img} alt={opcion.name}/>
        ))}
        {/* <img src={rockA} />
        <img src={paperA} />
        <img src={scissorsA} />
        <img src={lizardA} />
        <img src={spockA} /> */}
      </div>


      <div className='playerTwo'>
      </div>

      {playerOneChoice && <p>Opción seleccionada por jugador uno es : {playerOneChoice}</p>}
      {playerTwoChoice && <p>Opción seleccionada por jugador dos es : {playerTwoChoice}</p>}
    </div>
  );
}

export default Game;
