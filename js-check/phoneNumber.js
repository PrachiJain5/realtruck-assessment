// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

const phoneNumber = (pNum) => {
// Removes parantheses, hyphen, dots and spaces
	pNum = pNum.split("(").join("");
	pNum = pNum.split(")").join("");
	pNum = pNum.split("-").join("");
	pNum = pNum.split(" ").join("");
	pNum = pNum.split(".").join("");

	//Rejects invalid 9 digit numbers
	if (pNum.length === 9) {
		return null;
	}

	//Ensures only a number is input
	pNum = pNum.replace(/\D/g, '');


	//Ensures numbers beginning with 1 are valid
	if (pNum.length === 11 && pNum.charAt(0) != 1) {
		return null;
	}

	if (pNum.length === 11 && pNum.charAt(0) == 1) {
		return pNum.substring(1);
	}

	if (pNum.length > 11 ) {
		return null;
	}

	if (pNum === ''){
		return null;
	}

	//Checks area code
	if (parseInt(pNum.charAt(0)) < 2) {
     	return null;
	}

	if (parseInt(pNum.charAt(3)) < 2) {
     	return null;
	}

	return pNum;
}

module.exports = phoneNumber;
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
