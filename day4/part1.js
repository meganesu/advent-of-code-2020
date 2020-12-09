const readInput = require('../util/read-input')

const lines = readInput(process.argv[2])

let passports = []
let numValidPassports = 0

const isValidPassport = passport => {
	const validKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']
	const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

	// has all required keys
	for (key of requiredKeys) {
		if (!passport[key]) return false
	}

	return true
}


// get all passports
let currentPassport = {}
for (line of lines) {
	if (line === '') {
		if (isValidPassport(currentPassport)) {
			numValidPassports += 1
		}

		passports.push(currentPassport)
		currentPassport = {}
		continue
	}

	// parse fields from line and add them to currentPassport
	const pairs = line.split(' ')

	for (pair of pairs) {
		const [key, value] = pair.split(':')
		currentPassport[key] = value
	}
}

console.log('Number of valid passports:', numValidPassports)