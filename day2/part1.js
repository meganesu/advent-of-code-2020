const fs = require('fs');
const file = fs.readFileSync('input.txt');

const passwordReport = file.toString().split('\n');

let numValidPasswords = 0;

for (let line of passwordReport) {
    // Line structure: "minOccurrences-maxOccurrences requiredCharacter: password"
    // e.g., "1-3 a: asdfghjk"

    const parsedLine = line.split(' ')

    const parsedOccurrences = parsedLine[0].split('-')
    const minOccurrences = parsedOccurrences[0]
    const maxOccurrences = parsedOccurrences[1]

    const requiredCharacter = parsedLine[1].substring(0, parsedLine[1].length - 1)

    const password = parsedLine[2]

    const regExp = new RegExp(`${requiredCharacter}`, 'g')
    const numOccurrences = [...password.matchAll(regExp)].length
    if (numOccurrences >= minOccurrences && numOccurrences <= maxOccurrences) {
        numValidPasswords++;
    }
}

console.log("Number of valid passwords:", numValidPasswords);
