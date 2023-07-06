import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './PopUpRules.css'

export default function PopUpRules ({onClose, isRules}) {

    return (
      <div className="popup">
        <div className="popup-header">
          <CloseIcon className="on-close" fontSize="small" onClick={onClose}/>
        </div>
      <div className="popup-content">
        {isRules ? (
            <p style={{ fontSize: '15px' }}>
            Scissors cuts paper,
            <br />
            paper covers rock,
            <br />
            rock crushes lizard,
            <br />
            lizard poisons Spock,
            <br />
            Spock smashes scissors,
            <br />
            scissors decapitates lizard,
            <br />
            lizard eats paper,
            <br />
            paper disproves Spock,
            <br />
            Spock vaporizes rock,
            <br />
            and as it always has, 
            <br />
            rock crushes scissors.
            </p>
        ) : (
            <p style={{ fontSize: '15px' }}>
                For one player<br />
                press A --{'>'} rock<br />
                press S --{'>'} paper<br />
                press D --{'>'} scissors<br />
                press W --{'>'} lizard<br />
                press E --{'>'} spock<br />
                <br />
                For two players<br />
                For the player on the left the above rules apply, for the player on the right the following rules apply:<br />
                press J --{'>'} rock<br />
                press K --{'>'} paper<br />
                press L --{'>'} scissors<br />
                press I --{'>'} lizard<br />
                press O --{'>'} spock<br />
            </p>
        )}     
      </div>
    </div>
  );

}