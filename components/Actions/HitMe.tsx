import { Button } from "react-native";
import { useGameState } from "../../gameContext/gameContext"
import { generateCard } from "./generateCard";

const HitMe = (()=>{
    const {setPlayerState, playerState} = useGameState();
    const newCard = (()=>{
        const newCard = generateCard();
        const newHand = [newCard,...playerState?.hand];
        const newScore = newCard.value + playerState?.score;
        setPlayerState({
            hand: newHand,
            score: newScore,
            playerTurn: newScore <= 21 ? true : false,
        })
    })

    return (
        <Button title="Hit" onPress={newCard} />
    )
})

export default HitMe;