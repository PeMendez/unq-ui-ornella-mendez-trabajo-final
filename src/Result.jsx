import React from "react";
import Button from 'react-bootstrap/Button'
import './result.css';


const Result = ({result, onClose}) => {

    return (
        <div className="result">
            <div className="result-content">
                <p>{result}</p>
            </div>
            <div className="result-button">
            <Button className='mb-1' variant="outline-info" onClick={onClose}>Try again</Button>
            </div>
        </div>
    );


}

export default Result; 