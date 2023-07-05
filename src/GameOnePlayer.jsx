import './Game.css';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import GameOptions from './GameOptions';
import Result from './Result';
import { useNavigate, useParams } from "react-router-dom";

const GameOnePlayer = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState("")
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const {rounds} = useParams();
  const [current, setCurrent] = useState(1);

  const navigate = useNavigate();

  const handlePopupClose = () => {
      setResult("");
      setComputerChoice(null);
      setUserChoice(null); 
      navigate(`/`)
  };

  const handleUserChoice = (idOption) => {
    setDisabled(true)
    setCurrent(current+1)
    setUserChoice(idOption)
    const randomChoice = Math.floor(Math.random() * 5) +1;

    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 1500);

    setTimeout(() => {
      countWins(idOption, randomChoice);
      setUserChoice(null)
      setComputerChoice(null)
    }, 3000);

    setTimeout(() => {
      checkResult()
    }, 3000);

    clearTimeout();
  }

  const checkResult = () => {
    if (rounds == current) {
      setResult("getResultCount()")
    } else {
      setDisabled(false)
    }
  }

  const countWins = (user, computer) => {
    if (GameOptions[user-1].wins.includes(computer)){
      setUserWins(userWins+1)
    }
    if (GameOptions[computer-1].wins.includes(user)){
      setComputerWins(computerWins+1)
    }
  }  

  const getResultCount = () => {
    if (computerWins > userWins) {
      return "You lost"       
    }
    if (userWins > computerWins) {
      return "You won"
    }
    return "You tied"   
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
          break;
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
  }, [disabled, result]);

  useEffect(() => {
    getResultCount()
  }, [current])
  
  return (
    <div className='game-container container'>
    <div className='container'>
      <h1 className='rounds-container'>
        <span className='title-text'>Available rounds: {rounds - (current -1)}</span>
      </h1>
    </div>
    <div className='scoreboard'>
    <Row>
        <Col>
        <span> you win {userWins} {userWins < 2 ? "game" : "games"}</span>
        </Col>
        <Col>
        <span> computer win {computerWins} {computerWins < 2 ? "game" : "games"}</span>
        </Col>
    </Row>      
    </div>
    <div>
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
      {result !== "" && <Result result={getResultCount()} onClose={handlePopupClose}/>}
  </div>
  );
}

export default GameOnePlayer;
