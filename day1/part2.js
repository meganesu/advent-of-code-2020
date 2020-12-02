const fs = require('fs');
const file = fs.readFileSync('input.txt');

const expenseReport = file.toString().split('\n');

const expenseCombinations = {}; // keys: sums of 2 expenses; values: [firstExpense, secondExpense]

for (let [index, expense] of expenseReport.entries()) {
	const expenseComplement = (2020 - parseInt(expense)).toString();

    const expenseCombination = expenseCombinations[expenseComplement];
	if (expenseCombination) {
		console.log(`Match found! ${expense} + ${expenseCombination[0]} + ${expenseCombination[1]}`);
		console.log(`Answer: ${expense * expenseCombination[0] * expenseCombination[1]}`)
		return;
	}

    // Add combinations of expense and all previous expenses to expenseCombinations
	for (let secondIndex = index-1; secondIndex >= 0; secondIndex--) {
        const secondExpense = expenseReport[secondIndex];
        expenseCombinations[parseInt(expense) + parseInt(secondExpense)] = [expense, secondExpense];
    }
}