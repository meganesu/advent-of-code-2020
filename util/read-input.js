const fs = require('fs');

const readInput = (pathToFile) => {
	if (!pathToFile) {
		console.log("ERROR: Missing path to input file!")
		console.log("USAGE: node day<X>/part<Y>.js <pathToInputFile>")
		process.exit(1)
	}

	const file = fs.readFileSync(pathToFile);

	return file.toString().split('\n')
}

module.exports = readInput
