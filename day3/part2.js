const readInput = require('../util/read-input')

const lines = readInput(process.argv[2])

const numRows = lines.length
const numColumns = lines[0].length
console.log('Rows:', numRows)
console.log('Columns:', numColumns)

const slopes = [
	{
		row: 1,
		column: 1,
	},
	{
		row: 1,
		column: 3,
	},
	{
		row: 1,
		column: 5,
	},
	{
		row: 1,
		column: 7,
	},
	{
		row: 2,
		column: 1,
	},
]

const getNextPosition = (currentPosition, slope) => (
	{
		row: currentPosition.row + slope.row,
		column: (currentPosition.column + slope.column) % numColumns,
	}
)

const treesEncounteredPerSlope = []

for (slope of slopes) {
	let currentPosition = {
		row: 0,
		column: 0,
	}

	let numTreesEncountered = 0

	while (currentPosition.row < numRows) {
		console.log(`Cell ${currentPosition.column}, ${currentPosition.row}: ${lines[currentPosition.row][currentPosition.column]}`)
		// if current position is a tree, increment counter
		if (lines[currentPosition.row][currentPosition.column] === '#') {
			numTreesEncountered += 1
		}

		currentPosition = getNextPosition(currentPosition, slope)
		console.log(`New position: ${currentPosition.column}, ${currentPosition.row}`)
	}

	treesEncounteredPerSlope.push(numTreesEncountered)
}

console.log('Number of trees encountered:', treesEncounteredPerSlope)
console.log('Product:', treesEncounteredPerSlope.reduce(
	(product, treesEncountered) => product * treesEncountered
))
