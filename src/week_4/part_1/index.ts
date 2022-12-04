// --- Day 4: Camp Cleanup ---

import { data_week_4 } from "../input";

const stringMap = (str: string): number[] => {
    const arrayIn = str.split('-');
    const [start, end] = [parseInt(arrayIn[0]), parseInt(arrayIn[1])];

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

const checkArrayContains = (arrayIn: number[], arrayCheck: number[]): boolean => {
    return arrayCheck.every((value) => arrayIn.includes(value));
};

export default function () {
    const input = data_week_4;

    let total = 0;

    input.split("\n").forEach((line) => {
        let EachSide = line.split(',');
        let [left, right] = [stringMap(EachSide[0]), stringMap(EachSide[1])];
        if (checkArrayContains(left, right) || checkArrayContains(right, left)) {
            total++;
        }
    });

    console.log(total);
}
