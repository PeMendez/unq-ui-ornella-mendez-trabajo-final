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
            <p style={{ fontSize: '20px' }}>
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
            and as it always has, rock crushes scissors.
            </p>
        ) : (
            <p style={{ fontSize: '20px' }}>
                For one player<br />
                press A if you want to choose rock<br />
                press S if you want to choose paper<br />
                press D if you want to choose scissors<br />
                press W if you want to choose lizard<br />
                press E if you want to choose spock<br />
                <br />
                For two players<br />
                For the player on the left the above rules apply, for the player on the right the following rules apply:<br />
                press J if you want to choose rock<br />
                press K if you want to choose paper<br />
                press L if you want to choose scissors<br />
                press I if you want to choose lizard<br />
                press O if you want to choose spock<br />
            </p>
        )}     
      </div>
    </div>
  );

}