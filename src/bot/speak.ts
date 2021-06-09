import {getRandom, multiline} from "../util";

const PRELUDE = [
    `Yes, of course`,
    `Mmmmm, right away`,
    `Smashing request`,
    `At once`
];

// const OUTRO = [
//     `Forever and always at your service`,
//     `Charmed`,
// ];

export const speak = (message: string) => multiline(
    `${getRandom(PRELUDE)}...`,
    message
);


export const deepApology = (message: string) => multiline(
    `Oh dear... I'm sure I don't know what happened. Terribly sorry.`,
    message
);
