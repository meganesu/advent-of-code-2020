const readInput = require('../util/read-input')

const lines = readInput(process.argv[2])

let highestSeatId = -1

const searchForSeat = (
	remainingSearchString,
	currentMin,
	currentMax
) => {
	const nextCharacter = remainingSearchString[0]

	// base case
	if (remainingSearchString.length === 0) {
		return currentMin
	}

	const midPoint = currentMin + (parseInt((currentMax - currentMin)/2))

	if (nextCharacter === 'F' || nextCharacter === 'L') {
		// keep lower half
		return searchForSeat(
			remainingSearchString.substr(1),
			currentMin,
			midPoint
		)
	}

	// keep upper half
	return searchForSeat(
		remainingSearchString.substr(1),
		midPoint + 1,
		currentMax
	)
}

for (let line of lines) {
	// use the first 7 characters to find the row
	const rowString = line.substr(0, 7)
	const row = searchForSeat(rowString, 0, 127)

	// use the last three characters to find the row
	const columnString = line.substr(7)
	const column = searchForSeat(columnString, 0, 7)

	// calculate the seat ID
	const seatId = row * 8 + column

	// check if it's higher than the current highest seat id
	if (seatId > highestSeatId) {
		highestSeatId = seatId
		console.log('Highest seat id replaced with', highestSeatId)
	}
}

console.log("Highest seat id:", highestSeatId)