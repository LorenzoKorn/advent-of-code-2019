const range = '138241-674034'.split('-');
const start = parseInt(range[0]);
const end = parseInt(range[1]);
let totalPassCodes = 0;

for (let passCode = start; passCode < end; passCode++) {
    totalPassCodes += isPasswordValid(passCode.toString());
}

function isPasswordValid(code) {
    let hasPair = false;
    let pointer = 0;
    for (let i = 0; i < code.length; i++) {
        if (code[i] < pointer) return false;        // checks if numbers are increasing
        if (code[i] === pointer) hasPair = true;    // check if the number contains a pair
        pointer = code[i];                          // switches pointer
    }
    return hasPair;
}

console.log(totalPassCodes);