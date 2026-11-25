#!/usr/bin/env node
import { parseArgs } from "node:util";

const { values } = parseArgs({
    options: {
        name: {
            type: "string",
            short: "n",
            default: "World",
        },
    },
});

console.log(`Hello, ${values.name}!`);