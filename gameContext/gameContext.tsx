import React, {createContext, useContext, useState, Dispatch, ReactNode, SetStateAction, ReactElement} from "react";
import { player, dealer } from "../types/types";

type gameContextType = {
    playerState: player | null
    setPlayerState: Dispatch<SetStateAction<player | null>>
    dealerState: dealer | null
    setDealerState: Dispatch<SetStateAction<dealer | null>>
}

const GameContext = createContext<gameContextType|undefined>(undefined)

const useGameState = (()=>{
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("No game provider found");
    }
    return context;
})

const GameProvider = (props: { children: ReactNode }): ReactElement => {
    const [playerState, setPlayerState] = useState<player| null>(null);
    const [dealerState, setDealerState] = useState<dealer | null>(null);
    return <GameContext.Provider {...props} value={{ playerState, setPlayerState, dealerState, setDealerState }} />;
};

export {GameProvider,useGameState}