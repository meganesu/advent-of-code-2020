const readInput = require('../util/read-input')

const lines = readInput(process.argv[2])

const numRows = lines.length
const numColumns = lines[0].length
console.log('Rows:', numRows)
console.log('Columns:', numColumns)

let currentPosition = {
	row: 0,
	column: 0,
}

const getNextPosition = currentPosition => (
	{
		row: currentPosition.row + 1,
		column: (currentPosition.column + 3) % numColumns,
	}
)

let numTreesEncountered = 0

while (currentPosition.row < numRows) {
	console.log(`Cell ${currentPosition.column}, ${currentPosition.row}: ${lines[currentPosition.row][currentPosition.column]}`)
	// if current position is a tree, increment counter
	if (lines[currentPosition.row][currentPosition.column] === '#') {
		numTreesEncountered += 1
	}

	currentPosition = getNextPosition(currentPosition)
	console.log(`New position: ${currentPosition.column}, ${currentPosition.row}`)
}

console.log('Number of trees encountered:', numTreesEncountered)
