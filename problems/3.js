/**
 * Problem 3: Filtering
 * 
 * Given an array of numbers, only return the ones that are divisible by 3.
 * Use the .filter function.
 * 
 * @example [1, 2, 3, 4, 5, 6, 7, 8, 9] -> [3, 6, 9]
 */
function problem(numbers) {
    let array = [];
    for (const number of numbers) {
        if (number % 3 === 0) {
            array.push(number);
        }
    }
    return array;
}

const tests = [
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 6, 9]],
    [[3], [3]],
    [[], []],
]

module.exports = {problem, tests};