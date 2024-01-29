export type deckType = {
    card: string,
    value: number,
    sprite: string,
}

export type player = {
    score: number, 
    hand: deckType[], 
    playerTurn: boolean,
}

export type dealer = {
    score: number,
    hand: deckType[],
}