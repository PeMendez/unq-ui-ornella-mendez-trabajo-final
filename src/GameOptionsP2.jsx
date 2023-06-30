import { LiaHandLizard ,LiaHandSpock, LiaHandScissors, LiaHandRock, LiaHandPaper } from "react-icons/lia";

const GameOptionsP2 = [
    { id: 1, name: "Rock",     icon: <LiaHandRock/>,     wins: [4, 3], letter: "J"},
    { id: 2, name: "Paper",    icon: <LiaHandPaper/>,    wins: [1, 5], letter: "K"},
    { id: 3, name: "Scissors", icon: <LiaHandScissors/>, wins: [2, 4], letter: "L"},
    { id: 4, name: "Lizard",   icon: <LiaHandLizard/>,   wins: [5, 2], letter: "I"},
    { id: 5, name: "Spock",    icon: <LiaHandSpock/>,    wins: [3, 1], letter: "O"}
]

export default GameOptionsP2; 