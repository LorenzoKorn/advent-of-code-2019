const range = '138241-674034'.split('-');
const start = parseInt(range[0]);
const end = parseInt(range[1]);
let totalPassCodes = 0;

for (let passCode = start; passCode < end; passCode++) {
    totalPassCodes += isPasswordValid(passCode.toString());
}
console.log(totalPassCodes);

function isPasswordValid(code) {
    let count = {number_1: 0, number_2: 0, number_3: 0, number_4: 0, number_5: 0, number_6: 0, number_7: 0, number_8: 0, number_9: 0};
    let pointer = 0;

    // count the number of occurrences of a number
    for (let i = 0; i < code.length; i++) {
        if (code[i] < pointer) return false; // code has not ascending numbers
        count['number_' + code[i]]++;
        pointer = code[i];
    }

    let hasPair = false;
    let hasLargeGroup = false;
    // determines if a code has a pair
    for (let key in count) {
        if (count[key] === 2) return true;
    }

    return hasPair && !hasLargeGroup;
}