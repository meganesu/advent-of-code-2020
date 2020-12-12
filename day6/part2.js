const readInput = require('../util/read-input')

const lines = readInput(process.argv[2])

let sumOfCounts = 0
let currentSetOfQuestionsAnsweredYes = new Set()
let responsesInCurrentGroup = []
// parse the line
// if it's a new group, add the old count to the sum, reset the count, and start over
for (let line of lines) {
	if (line === '') {
		// if it's a blank line, check the current set of questions
		//   answered yes against each response in the group
		let listOfQuestionsEveryoneAnsweredYes = [...currentSetOfQuestionsAnsweredYes]

		for (let response of responsesInCurrentGroup) {
			listOfQuestionsEveryoneAnsweredYes = listOfQuestionsEveryoneAnsweredYes
				.filter(question => response.includes(question))
		}

		sumOfCounts += listOfQuestionsEveryoneAnsweredYes.length

		// reset for the next group
		currentSetOfQuestionsAnsweredYes = new Set()
		responsesInCurrentGroup = []
		continue
	}

	responsesInCurrentGroup.push(line)
	for (let char of line) {
		currentSetOfQuestionsAnsweredYes.add(char)
	}
}

console.log(sumOfCounts)