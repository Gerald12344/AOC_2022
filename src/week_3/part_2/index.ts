// --- Part Two ---

import { data_week_3 } from "../input";
import { MapToNumber } from "../part_1";

function findDubs<T extends unknown[]>(array: T, array2: T, array3: T): T {
    let result = array.filter((value) => array2.includes(value) && array3.includes(value));
    return result as any;
}

export default function () {
    const input = data_week_3;

    let split = input.split("\n");
    let total = 0;

    for (let i = 0; i < split.length; i += 3) {

        let [array1, array2, array3] = [split[i].split(""), split[i + 1].split(""), split[i + 2].split("")];
        let dubs = findDubs(array1, array2, array3)

        if (dubs[0]) {
            total += MapToNumber(dubs[0]);
        }
    }

    console.log(total)
}