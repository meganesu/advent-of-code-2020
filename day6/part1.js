const readInput = require('../util/read-input')

const lines = readInput(process.argv[2])

let sumOfCounts = 0
let currentSetOfQuestionsAnsweredYes = new Set()
// parse the line
// if it's a new group, add the old count to the sum, reset the count, and start over
for (let line of lines) {
	if (line === '') {
		// if it's a blank line, start the next group
		sumOfCounts += currentSetOfQuestionsAnsweredYes.size
		currentSetOfQuestionsAnsweredYes = new Set()
	}

	for (let char of line) {
		currentSetOfQuestionsAnsweredYes.add(char)
	}
}

console.log(sumOfCounts)