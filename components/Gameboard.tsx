import React, {useEffect} from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import StartGame from "./Actions/StartGame";
import { useGameState } from "../gameContext/gameContext";
import HitMe from "./Actions/HitMe";
import Double from "./Actions/Double";

const Gameboard = (() => {
    const {playerState, dealerState} = useGameState();

    useEffect(()=>{
    })
    return(
        <SafeAreaView>
            <StartGame/>
            {
            playerState && dealerState &&
            <>
                <Text>Dealer Total: {dealerState.score}</Text>
                <Text>Dealer Cards:</Text>
                <FlatList 
                    style={{paddingBottom: 20,}}
                    data={dealerState.hand} 
                    renderItem={({item}) => <Text>{item.card}</Text>}
                />
                <Text>Player Total: {playerState.score}</Text>
                <Text>Player Cards:</Text>
                <FlatList 
                    style={{paddingBottom: 20,}}
                    data={playerState.hand} 
                    renderItem={({item}) => <Text>{item.card}</Text>}
                />
                {playerState?.playerTurn &&
                    <>
                        <HitMe />
                        <Double />
                    </>
                }
                {playerState.score > 21 && 
                    <Text>Loser</Text>
                }
            </>
            }
        </SafeAreaView>
    )
})

export default Gameboard;