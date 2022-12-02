// --- Day 2: Rock Paper Scissors ---

import { data_week_2 } from "../input";

let lookUp: {
    [key: string]: {
        [key: string]: string
    }
} = {
    "A": {
        "X": "3",
        "Y": "6",
        "Z": "0"
    },
    "B": {
        "X": "0",
        "Y": "3",
        "Z": "6"
    },
    "C": {
        "X": "6",
        "Y": "0",
        "Z": "3"
    }
}

export default function () {
    let input = data_week_2;

    let total = 0;
    input.split("\n").forEach(e => {
        let data = e.split(" ");

        total += parseInt(lookUp[data[0]][data[1]], 10);

        switch (data[1]) {
            case "X":
                total += 1;
                break;
            case "Y":
                total += 2;
                break;
            case "Z":
                total += 3;
                break;
        }


    });

    console.log(total);
}