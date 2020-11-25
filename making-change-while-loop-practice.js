//Bonus logical question:
// Write a loop that prints change given in the largest possible demoninations

// Helper function to round to 2 decimal places
// takes a single float 
// Note: could use more testing
function moneyRound(x) {
	let [whole, decimal] = x.toString().split('.');

	if (!decimal){
		return x;
	}

	let pennies = parseFloat('0.'+ decimal.slice(0,2));

	if (decimal[2] >= 5){
		pennies += .01;
	} 
	return parseInt(whole) +pennies;
}

// console.log(moneyRound(1.999));


function makeChange(cost, amtPaid){
	const denominations = [100,20,10,5,1,.25,.1,.05,.01]
	let change = {};
	let changeToMake = amtPaid - cost;
	for (const denom of denominations){
		if (denom < changeToMake){
			let numOfCurrDenom = Math.floor(changeToMake/denom);

			change[denom] = numOfCurrDenom;

			changeToMake -= moneyRound(numOfCurrDenom*denom);
			changeToMake = moneyRound(changeToMake);
		} else {
			change[denom] = 0;
		}
	}
	return change;
}

//testing code with example given in the slides
let result = makeChange(27.83,100); 
console.log(result);

let sum = 0;
for (const [key,value] of Object.entries(result)) {
	sum += key*value;
}

console.log(sum);

