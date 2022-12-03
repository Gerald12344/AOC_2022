//--- Day 3: Rucksack Reorganization ---

import { data_week_3 } from "../input";



function findDubs<T extends unknown[]>(array: T, array2: T): T {
    let result = array.filter((value) => array2.includes(value));
    return result as any;
}


const splitInHalf = <T>(arr: T[]): T[][] => { return [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2))] };

const MapToNumber = (x: string): number => {
    let char = x.charAt(0);
    if (char === char.toLowerCase()) {
        return x.charCodeAt(0) - 96;
    } else {
        return x.charCodeAt(0) - (64 - 26);
    }
}

export { MapToNumber }

export default function () {
    const input = data_week_3;


    let total = 0;

    input.split("\n").forEach(e => {
        const [array1, array2] = splitInHalf(e.split(""));
        let dubs = findDubs(array1, array2)
        console.log(dubs)

        if (dubs[0]) {
            total += MapToNumber(dubs[0]);
        }

    });

    console.log(total)
}