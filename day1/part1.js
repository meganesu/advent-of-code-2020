const fs = require('fs');
const file = fs.readFileSync('input.txt');

const expenseReport = file.toString().split('\n');

const expenseSet = new Set();

for (const expense of expenseReport) {
	const expenseComplement = (2020 - parseInt(expense)).toString();

	if (expenseSet.has(expenseComplement)) {
		console.log(`Match found! ${expense} + ${expenseComplement}`);
		console.log(`Answer: ${expense * expenseComplement}`)
		return;
	}

	expenseSet.add(expense)
}