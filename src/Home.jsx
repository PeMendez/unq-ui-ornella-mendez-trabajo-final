import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import PopUpRules from './PopUpRules'
import { useNavigate } from "react-router-dom";
import spock from './images/spock.png';
import './Home.css';
import { LiaHandLizard ,LiaHandSpock, LiaHandScissors, LiaHandRock, LiaHandPaper } from "react-icons/lia";

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isRules, setIsRules] = useState(false);
    const [value, setValue] = useState(1)
    
    const navigate = useNavigate();

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handlePopUpOpen = (bool) => {
        setIsRules(bool)
        setIsPopupOpen(true)
    }

    const handleStartGameOne = () => {
        navigate(`${process.env.PUBLIC_URL}/gameOne/${value}`)
    }

    const handleStartGameTwo = () => {
        navigate(`${process.env.PUBLIC_URL}/gameTwo/${value}`)
    }

    const saveSelect = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='home-container container'>
          <div className='container'>
            <h1 className='tittle-main'>
              <span className="title-text">Rock, Paper, Scissors, Lizard or Spock  </span>
              <img src={spock} alt="spock" className="img-fluid" />
            </h1>
          </div>
          <div className='home-div'>
            <div className='round-container mb-4'>
              <span className='label-round'>
                Rounds
              </span>
              <select className='value-rounds' name="round" value={value.round} onChange={saveSelect}>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='button-game mb-1'>
              <Button className='mb-4 outline-custom' onClick={() => handleStartGameOne()}>One player</Button>
              <Button className='mb-4 outline-custom' onClick={() => handleStartGameTwo()}>Two players</Button>
            </div>            
            <div className='button-info mb-5'>
              <Button className='mb-1 info' variant="outline-info" onClick={() => handlePopUpOpen(true)}>Rules</Button>
              <Button className='mb-1 info' variant="outline-info" onClick={() => handlePopUpOpen(false)}>How to play?</Button>
            </div> 
            {isPopupOpen && <PopUpRules onClose={handlePopupClose} isRules={isRules} />}
          </div>
          <div className='icons'>
              <LiaHandRock/>
              <LiaHandPaper/>
              <LiaHandScissors/>
              <LiaHandLizard/>
              <LiaHandSpock/>
            </div>
        </div>
      );
      
      
}

export default Home; 