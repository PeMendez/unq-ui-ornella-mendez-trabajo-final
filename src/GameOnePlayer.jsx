import './Game.css';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import GameOptions from './GameOptions';
import Result from './Result';
import { useNavigate } from "react-router-dom";

function GameOnePlayer() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState("")
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  const handlePopupClose = () => {
      setResult("");
      setComputerChoice(null);
      setUserChoice(null); 
      navigate(`${process.env.PUBLIC_URL}/`)
  };

  const handleUserChoice = (idOption) => {
    setDisabled(true)
    setUserChoice(idOption)
    const randomChoice = Math.floor(Math.random() * 5) +1;

    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 1500);

    setTimeout(() => {
      setResult(getResult(idOption, randomChoice));
    }, 3000);

    clearTimeout();
  }

  const getResult = (user, computer) => {
    if (user === computer) {
      return "You tied"
    }
    if (GameOptions[user-1].wins.includes(computer)){
      return "You won"
    }
     return "You lost"
    
  }

  const handleKeyPress = (event) => {
    if (!disabled) {
      switch (event.key) {
        case 'a':
          handleUserChoice(1);
          break;
        case 's':
          handleUserChoice(2);
          break;
        case 'd':
          handleUserChoice(3);
          break;
        case 'w':
          handleUserChoice(4);
          break;
        case 'e':
          handleUserChoice(5);
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  
  return (
    <div className='game-container container'>
    <div className='container'>
      <h1 className='rounds-container'>
        <span className='title-text'>Round</span>
      </h1>
    </div>
    <div className='container'>
      <span> aca poner cuantas victorias tiene cada uno</span>
    </div>
    <div className=''>
      <Row className='choice'>
        <Col className='choiceP1'>
          <button className="round-button">
           {userChoice ? GameOptions[userChoice-1]?.icon : null } 
          </button>
        </Col>
        <Col className='choiceP2'>
        <button className="round-button-p2">
           {computerChoice ? GameOptions[computerChoice-1]?.icon : null } 
          </button>
        </Col>
      </Row>

    </div>
    <div className='icons'>
      {GameOptions.map((option) => (
        <button className="button-option"
                key={option.id} 
                onClick={()=> handleUserChoice(option.id)}
                disabled={disabled}>
          <div className='icon-wrapper'>
            {option.icon}
            <span className="label">{option.letter}</span>
          </div>
        </button>
      )
      )}   
      </div>
      {result != "" && <Result result={result} onClose={handlePopupClose}/>}
  </div>
  );
}

export default GameOnePlayer;
