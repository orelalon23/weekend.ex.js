console.log('-----------------ex6.1-----------------');

const accum = (someStr) => someStr.split('').map((str, i) => str.charAt(0).toUpperCase() + str.repeat(i)).join`-`

console.log(accum("RqaEzty")) //-> "A-Bb-Ccc-Dddd"

console.log('-----------------ex6.2-----------------');

const countDup = (str) => {
    let count = 0;
    return (str.toLowerCase().split("").filter((e, i, a) => a.indexOf(e) !== i)).length
}


console.log(countDup("aA11"));
// "aabbcde" -> 2 # 'a' and 'b
// abc = "aabbcde";
// console.log(abc.split("").length);

console.log('-----------------ex6.3-----------------');

const longest = (str1, str2) => str1.concat(str2).split("").filter((e, i, a) => a.indexOf(e) == i).sort().join``;


a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
console.log(longest(a, b)); // -> "abcdefklmopqwxy

console.log('-----------------ex6.4-----------------');

const isogram = (again) => again.toLowerCase().split("").every((e, i, a) => a.indexOf(e) == i ? true : false)

console.log(isogram("Dermatoglyphic"));
// isIsogram("Dermatoglyphics") == true

console.log('-----------------ex7----------------');



console.log('-----------------ex8----------------');

const rectangle = (a, b) => a * 2 + b * 2;


console.log(rectangle(6, 7));