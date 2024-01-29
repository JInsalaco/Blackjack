import { Button } from "react-native";
import { useGameState } from "../../gameContext/gameContext";
import { generateCard } from "./generateCard";

const StartGame = (()=>{
    const game = useGameState();

    const startGame = (()=>{
        const player = generateHand()
        const dealer = generateHand();
        
        game.setPlayerState({
            score: player.score,
            hand: player.hand,
            playerTurn: true,
        })
        game.setDealerState({
            score: dealer.score,
            hand: dealer.hand,
        })
    });

    const generateHand = (()=>{
        const hand = [generateCard(),generateCard()]
        const score = hand.reduce((sum,card) => sum + card.value, 0)
        return {
            hand: hand,
            score: score,
        }
    })

    return(
        <Button title="Start Game" onPress={startGame}/>
    )
})

export default StartGame;