import {Game} from "./types.ts";

const snake:Game = {
    id: 1,
    name: "Snake",
    path: "/Games/Snake"
}
const hangman:Game = {
    id: 2,
    name: "Hangman",
    path: "/Games/Hangman"
}

export const gamesList:Game[] = [
    snake,
    hangman
];
