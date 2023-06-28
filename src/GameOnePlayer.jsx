import rockA from './images/rockA.png'
import paperA from './images/paperA.png';
import scissorsA from './images/scissorsA.png';
import lizardA from './images/lizardA.png';
import spockA from './images/spockA.png';
import rockB from './images/rockB.png';
import paperB from './images/paperB.png';
import scissorsB from './images/scissorsB.png';
import lizardB from './images/lizardB.png';
import spockB from './images/spockB.png';
import './Game.css';

function Game() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={rockA}      />
        <img src={paperA}     />
        <img src={scissorsA}  />
        <img src={lizardA}    />
        <img src={spockA}     />
        <img src={rockB}     />
        <img src={scissorsB}     />
        <img src={paperB}     />
        <img src={lizardB}     />
        <img src={spockB}     />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Game;
