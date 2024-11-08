export interface Game {
    id: number,
    name: string,
    path: string
}

export const GAMES = {
    SNAKE: "Snake",
    HANGMAN: "Hangman"
}