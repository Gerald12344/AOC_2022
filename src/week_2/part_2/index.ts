// --- Part Two ---

import { data_week_2 } from "../input";

enum RockPaperScissors {
    Win = "Z",
    Loose = "X",
    Draw = "Y",
    Rock = "A",
    Paper = "B",
    Scissors = "C"
}

enum Num {
    Rock = "1",
    Paper = "2",
    Scissors = "3"
}


let lookUp: {
    [key: string]: {
        [key: string]: string
    }
} = {
    [RockPaperScissors.Rock]: {
        [RockPaperScissors.Loose]: Num.Scissors,
        [RockPaperScissors.Draw]: Num.Rock,
        [RockPaperScissors.Win]: Num.Paper
    },
    [RockPaperScissors.Paper]: {
        [RockPaperScissors.Loose]: Num.Rock,
        [RockPaperScissors.Draw]: Num.Paper,
        [RockPaperScissors.Win]: Num.Scissors
    },
    [RockPaperScissors.Scissors]: {
        [RockPaperScissors.Loose]: Num.Paper,
        [RockPaperScissors.Draw]: Num.Scissors,
        [RockPaperScissors.Win]: Num.Rock
    }
}

export default function () {
    let input = data_week_2;

    let total = 0;
    input.split("\n").forEach(e => {
        let data = e.split(" ");

        switch (data[1]) {
            case "X":
                total += 0;
                break;
            case "Y":
                total += 3;
                break;
            case "Z":
                total += 6;
                break;
        }

        total += parseInt(lookUp[data[0]][data[1]], 10);
    });





    console.log(total)
}