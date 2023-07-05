import React from "react";
import itsATrap from './images/itsATrap.gif';
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    const navigate = useNavigate();

    const handleRedirectHome = () => {
        navigate(`/`)
    }

    return (
        <div className='home-container container'>
          <div className='container'>
            <h1 className='tittle-main'>
              <span className="title-text"> 404 - page not found  </span>
            </h1>
          </div>
          <div className='home-div'>
            <div className='button-game mb-1'>
            <img src={itsATrap} alt="spock" className="img-sheldon" />
            </div>            
            <div className='button-game mb-1 mt-4'>
              <Button className='mb-1 info' variant="outline-info" onClick={() => handleRedirectHome()}>Back to Home</Button>
              </div>
          </div>
        </div>
      );

}

export default NotFoundPage; 