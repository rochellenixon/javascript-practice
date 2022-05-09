/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    str = str.trim().toLowerCase();
    if (str.length === 1){
        return true;
    }
    else if (str.length === 2){
        return str.charAt(0) === str.charAt(1);
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)){
        return false;
    }
    return problem(str.slice(1, str.length - 1));
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};