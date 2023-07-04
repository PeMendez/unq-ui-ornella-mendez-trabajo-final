import GameOptions from './GameOptions'
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Result from './Result';
import GameOptionsP2 from './GameOptionsP2'
import './GameP2.css';
import { useNavigate, useParams } from "react-router-dom";
import { LiaCheckSolid } from "react-icons/lia"



const Game = () => {
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [disabledp1, setDisabledP1] = useState(false);
  const [disabledp2, setDisabledP2] = useState(false);
  const [result, setResult] = useState("")
  const [p1Wins, setP1Wins] = useState(0);
  const [p2Wins, setP2Wins] = useState(0);
  const {rounds} = useParams();
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  const handlePopupClose = () => {
    setResult("");
    setPlayerOneChoice(null);
    setPlayerTwoChoice(null); 
    navigate(`${process.env.PUBLIC_URL}/`)
  };

  const handlePlayer1Choice = (idOption) => {
    setDisabledP1(true)
    setPlayerOneChoice(idOption)
    setCurrent(current+1)
  }

  const handlePlayer2Choice = (idOption) => {
    setDisabledP2(true)
    setPlayerTwoChoice(idOption)
  }
 
  const handleCountWin = (p1Choice, p2Choice) => {
    setTimeout(() => {
      if (playerOneChoice != null && playerTwoChoice != null) {
        if (GameOptions[p1Choice-1].wins.includes(p2Choice)){
          setP1Wins(p1Wins+1)
          checkResult()
        }
        if (GameOptions[p2Choice-1].wins.includes(p1Choice)){
          setP2Wins(p2Wins+1)
          checkResult()
        }
        checkResult()
      }
  }, 1000);
  }

  const checkResult = () => {
    setTimeout(() => {
      if (rounds == current) {
        setResult("end")
      } else {
        setPlayerOneChoice(null)
        setPlayerTwoChoice(null)
        setDisabledP1(false)
        setDisabledP2(false)
      }
    }, 1000);
  }
  
  useEffect(() => {
    handleCountWin(playerOneChoice, playerTwoChoice)
  }, [playerOneChoice, playerTwoChoice]);

  const getResultCount = () => {
    if (p1Wins > p2Wins) {
      return "Player one wins"       
    }
    if (p2Wins > p1Wins) {
      return "Player two wins"
    }
    return "Tied"   
  }
  

  useEffect(() => {
    getResultCount()
  }, [])

  const handleKeyPressP1 = (event) => {
    if (!disabledp1) {
      switch (event.key) {
        case 'a':
          handlePlayer1Choice(1);
          break;
        case 's':
          handlePlayer1Choice(2);
          break;
        case 'd':
          handlePlayer1Choice(3);
          break;
        case 'w':
          handlePlayer1Choice(4);
          break;
        case 'e':
          handlePlayer1Choice(5);
          break;
        default:
          break;
      }
    }
  };

  const handleKeyPressP2 = (event) => {
    if (!disabledp2) {
      switch (event.key) {
        case 'j':
          handlePlayer2Choice(1);
          break;
        case 'k':
          handlePlayer2Choice(2);
          break;
        case 'l':
          handlePlayer2Choice(3);
          break;
        case 'i':
          handlePlayer2Choice(4);
          break;
        case 'o':
          handlePlayer2Choice(5);
          break; 
        default:
          break;
      }
    }
  };

  useEffect(() => {

    document.addEventListener('keypress', handleKeyPressP1);
    document.addEventListener('keypress', handleKeyPressP2);

    return () => {
      document.removeEventListener('keypress', handleKeyPressP1);
      document.removeEventListener('keypress', handleKeyPressP2);
    };
  }, [disabledp1, disabledp2]);



  return (
<div className='game-container container'>
    <div className='container'>
      <h1 className='rounds-container'>
        <span className='title-text'>Available rounds: {rounds - current}</span>
      </h1>
    </div>
    <div className='scoreboard'>
    <Row>
        <Col>
        <span> player 1 win {p1Wins} {p1Wins < 2 ? "game" : "games"}</span>
        </Col>
        <Col>
        <span> player 2 win {p2Wins} {p2Wins < 2 ? "game" : "games"}</span>
        </Col>
    </Row>      
    </div>
    <div>
      <Row className='choice'>
        <Col className='choiceP1'>
          <button className="button">
           {playerOneChoice != null && playerTwoChoice == null ? <LiaCheckSolid/> : GameOptions[playerOneChoice-1]?.icon }
           {/* GameOptions[playerOneChoice-1]?.icon : null }  */}
          </button>
        </Col>
        <Col className='choiceP2'>
        <button className="button-p2">
          {playerTwoChoice != null && playerOneChoice == null ? <LiaCheckSolid/> : GameOptions[playerTwoChoice-1]?.icon }
           {/* {playerTwoChoice ? GameOptions[playerTwoChoice-1]?.icon : null }  */}
          </button>
        </Col>
      </Row>

    </div>
    <div className='icons'>
      <Row>
        <Col className='iconsOption xs'>
        {GameOptions.map((option) => (
            <button className="option small-button"
                    key={option.id} 
                    onClick={()=> handlePlayer1Choice(option.id)}
                    disabled={disabledp1}
                    style={{ marginRight: '7px' }}>
              <div className='icon-wrapper-p2'>
                {option.icon}
                <span className="label">{option.letter}</span>
              </div>
            </button>
            )
          )}  
        </Col>
        <Col className='iconsOption'>
          {GameOptionsP2.map((option) => (
            <button className="option2 small-button"
                    key={option.id} 
                    onClick={()=> handlePlayer2Choice(option.id)}
                    disabled={disabledp2}
                    style={{ marginRight: '7px' }}>
              <div className='icon-wrapper-p2'>
                {option.icon}
                <span className="label">{option.letter}</span>
              </div>
            </button>
            )
          )}   
        </Col>
      </Row>

    </div>
      {result !== "" && <Result result={getResultCount()} onClose={handlePopupClose}/>}
  </div>
  );
}

export default Game;
