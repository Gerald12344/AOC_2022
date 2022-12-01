"use strict";
// --- Day 1: Calorie Counting ---
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("../input");
function default_1() {
    let input = input_1.data_week_1;
    let totalMax = [];
    let runningTotal = 0;
    input.split("\n").forEach(e => {
        if (e === "") {
            totalMax.push(runningTotal);
            runningTotal = 0;
            return;
        }
        runningTotal += parseInt(e, 10);
    });
    totalMax.sort((a, b) => b - a);
    console.log(totalMax);
    console.log(totalMax[0] + totalMax[1] + totalMax[2]);
}
exports.default = default_1;
