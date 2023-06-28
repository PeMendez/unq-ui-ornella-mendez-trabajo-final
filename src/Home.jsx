import React from 'react';
import rockA from './images/rockA.png'
import paperA from './images/paperA.png';
import scissorsA from './images/scissorsA.png';
import lizardA from './images/lizardA.png';
import spockA from './images/spockA.png';
import { useState } from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import PopUpRules from './PopUpRules'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isRules, setIsRules] = useState(false);
    
    const navigate = useNavigate();

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handlePopUpOpen = (bool) => {
        setIsRules(bool)
        setIsPopupOpen(true)
    }

    const handleStartGame = (isOnePlayer) => {
        navigate(`/game/${isOnePlayer}`)
    }

    return (
        <div className="App">
          <div className="container">
            <div className= "images">
                <img src={rockA}   />
                <img src={paperA}   />
                <img src={scissorsA}   />
                <img src={lizardA}   />
                <img src={spockA}   />
            </div>
            <div className="top-right">
                <Button className="rules" onClick={() => handlePopUpOpen(true)}>
                    Rules
                </Button>
                <Button className="rules" onClick={() => handlePopUpOpen(false)}>
                    How to play?
                </Button>
            </div>            
                <div className="button-container">
                <Button className="players"  onClick={() => handleStartGame(true)}>
                    1P
                </Button>
                <Button className="players"  onClick={() => handleStartGame(false)}>
                    2P
                </Button>
                </div>
            </div>
            {isPopupOpen && <PopUpRules onClose={handlePopupClose} isRules={isRules} />}
        </div>
    )
}

export default Home; 