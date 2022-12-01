"use strict";
// AOC Runner
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
let week = process.argv[2];
let part = process.argv[3];
if (week === undefined) {
    throw new Error("No week specified");
}
// Check Dir Exists
if ((0, fs_1.existsSync)(`./build/week_${week}`)) {
    // fetch test data
    (() => __awaiter(void 0, void 0, void 0, function* () {
        // Now run it
        let dynamicImport = require(`./week_${week}/part_${part}/index.js`);
        try {
            yield dynamicImport.default();
        }
        catch (e) {
            console.log("Error in module", e);
        }
    }))();
}
else {
    throw new Error("Week does not exist");
}
