import { LiaHandLizard ,LiaHandSpock, LiaHandScissors, LiaHandRock, LiaHandPaper } from "react-icons/lia";

const GameOptions = [
    { id: 1, name: "Rock",     icon: <LiaHandRock/>,    wins: [4, 3], letter: "A"},
    { id: 2, name: "Paper",    icon: <LiaHandPaper/>,    wins: [1, 5], letter: "S"},
    { id: 3, name: "Scissors", icon: <LiaHandScissors/>, wins: [2, 4], letter: "D"},
    { id: 4, name: "Lizard",   icon: <LiaHandLizard/>, wins: [5, 2], letter: "W"},
    { id: 5, name: "Spock",    icon: <LiaHandSpock/>,    wins: [3, 1], letter: "E"}
]

export default GameOptions; 