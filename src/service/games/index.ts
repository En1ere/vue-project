import {Game, GAMES} from "./types.ts";

const snake:Game = {
    id: 1,
    name: GAMES.SNAKE,
    path: "/Games/Snake"
}
const hangman:Game = {
    id: 2,
    name: GAMES.HANGMAN,
    path: "/Games/Hangman"
}

export const gamesList:Game[] = [
    snake,
    hangman
];
