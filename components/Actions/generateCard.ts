import deck from '../../cards/deck.json';

export const generateCard = (()=>{
    return deck[Math.floor(Math.random() * deck.length)]
})