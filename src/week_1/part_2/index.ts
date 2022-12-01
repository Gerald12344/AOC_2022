// --- Day 1: Calorie Counting ---

import { data_week_1 } from "../input";




export default function () {
    let input = data_week_1;

    let totalMax: number[] = [];

    let runningTotal = 0;
    input.split("\n").forEach(e => {
        if (e === "") {
            totalMax.push(runningTotal);
            runningTotal = 0;
            return;
        }
        runningTotal += parseInt(e, 10);
    })

    totalMax.sort((a, b) => b - a);

    console.log(totalMax[0] + totalMax[1] + totalMax[2]);
}