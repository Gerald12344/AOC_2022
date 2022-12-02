// AOC Runner

import { existsSync, readFileSync } from 'fs';


let week = process.argv[2];
let part = process.argv[3];

if (week === undefined) {
    throw new Error("No week specified");
}


// Check Dir Exists
if (existsSync(`./build/week_${week}`)) {
    // fetch test data

    (async () => {
        // Now run it
        let dynamicImport = require(`./week_${week}/part_${part}/index.js`);

        try {
            await dynamicImport.default();
        } catch (e) {
            console.log("Error in module", e);
        }
    })();
} else {
    throw new Error(`Week ${week} does not exist`);
}


