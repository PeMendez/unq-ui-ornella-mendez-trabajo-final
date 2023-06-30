import rockA from './images/rockA.png'
import paperA from './images/paperA.png';
import scissorsA from './images/scissorsA.png';
import lizardA from './images/lizardA.png';
import spockA from './images/spockA.png';

const GameOptionsP1 = [
    { id: 0, name: "Rock", img: rockA, wins: [3, 2]},
    { id: 1, name: "Paper", img: paperA, wins: [0, 4]},
    { id: 2, name: "Scissors", img: scissorsA, wins: [1, 3]},
    { id: 3, name: "Lizard", img: lizardA, wins: [4, 1]},
    { id: 4, name: "Spock", img: spockA, wins: [2, 0]}
]

export default GameOptionsP1; 