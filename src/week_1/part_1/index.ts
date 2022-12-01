// --- Day 1: Calorie Counting ---

import { data_week_1 } from "../input";




export default function () {
    let input = data_week_1;

    let totalMax = -1;

    let runningTotal = 0;
    input.split("\n").forEach(e => {
        if (e === "") {
            if (runningTotal > totalMax) {
                totalMax = runningTotal;
            }
            runningTotal = 0;
            return;
        }
        runningTotal += parseInt(e, 10);
    })

    console.log(totalMax)
}
