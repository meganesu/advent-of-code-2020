const fs = require('fs');

const readInput = (pathToFile) => {
	const file = fs.readFileSync(pathToFile);

	return file.toString().split('\n')
}

module.exports = readInput
