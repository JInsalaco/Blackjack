import { Button } from "react-native";
import { useGameState } from "../../gameContext/gameContext"
import { generateCard } from "./generateCard";

const Double = (()=>{
    const {setPlayerState, playerState} = useGameState();
    const newCard = (()=>{
        const newCard = generateCard();
        const newHand = [newCard,...playerState?.hand];
        const newScore = newCard.value + playerState?.score;
        setPlayerState({
            hand: newHand,
            score: newScore,
            playerTurn: false,
        })
    })

    return (
        <Button title="Double" onPress={newCard} />
    )
})

export default Double;