"use strict";
// --- Day 1: Calorie Counting ---
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("../input");
function default_1() {
    let input = input_1.data_week_1;
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
    });
    console.log(totalMax);
}
exports.default = default_1;
