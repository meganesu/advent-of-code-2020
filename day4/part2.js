const readInput = require('../util/read-input')

const lines = readInput(process.argv[2])

let passports = []
let numValidPassports = 0

const isValidBirthYear = byr => {
	const birthYear = parseInt(byr)

	return birthYear >= 1920 && birthYear <= 2002
}

const isValidIssueYear = iyr => {
	const issueYear = parseInt(iyr)

	return issueYear >= 2010 && issueYear <= 2020
}

const isValidExpirationYear = eyr => {
	const expirationYear = parseInt(eyr)

	return expirationYear >= 2020 && expirationYear <= 2030
}

const isValidHeight = hgt => {
	const units = hgt.substr(-2)
	if (units !== 'cm' && units !== 'in') return false

	const height = parseInt(hgt.substr(0, hgt.length - 2))
	if (units === 'cm') {
		return height >= 150 && height <= 193
	}
	else if (units === 'in') {
		return height >= 59 && height <= 76
	}

	return false
}

const isValidHairColor = hcl => {
	const regex = new RegExp(/^#[0-9a-f]{6}$/, 'g')
	return regex.test(hcl)
}

const isValidEyeColor = ecl => {
	const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
	return validEyeColors.includes(ecl)
}

const isValidPassportId = pid => {
	const regex = new RegExp(/^[0-9]{9}$/, 'g')
	return regex.test(pid)
}


const isValidPassport = passport => {
	const validKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']
	const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

	// has all required keys
	for (key of requiredKeys) {
		if (!passport[key]) return false
	}

	// required keys all have valid values
	return isValidBirthYear(passport['byr'])
		 && isValidIssueYear(passport['iyr'])
		 && isValidExpirationYear(passport['eyr'])
		 && isValidHeight(passport['hgt'])
		 && isValidHairColor(passport['hcl'])
		 && isValidEyeColor(passport['ecl'])
		 && isValidPassportId(passport['pid'])
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