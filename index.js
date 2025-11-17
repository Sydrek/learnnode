import fs from 'fs';
import boxen from 'boxen';
import { color } from 'bun';

fs.writeFileSync('Data/test.txt', 'Hello test!');

console.log(
    boxen('unicorn', {
        padding: 1,
        backgroundColor: 'green'
    })
);