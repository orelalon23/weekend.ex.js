console.log('-----------------ex5.1-----------------');

const trimming = (someString) => someString.slice(1, -1)

console.log(trimming('orel'));

console.log('-----------------ex5.2-----------------');

const strRepeat = (num, str) => str.repeat(num)

console.log(strRepeat(6, "orel"));

console.log('-----------------ex5.3-----------------');

const camelCase = (abc) => abc.split("-").map((val, i, arr) => i !== 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val).join` `

console.log(camelCase('orel-alon-using-camelCase'));

console.log('-----------------ex5.4-----------------');


const toWeirdCase = (word) => word.split("").map((v, i) => i % 2 == 0 ? v.toUpperCase() : v).join``


console.log(toWeirdCase('Weird string case'));

console.log('-----------------ex5.5-----------------');

const toAbbreviate = (yourName) => yourName.split(" ").map((val) => val.charAt(0).toUpperCase()).join`.`;


console.log(toAbbreviate("orel alon"));

console.log('-----------------ex5.6-----------------');

const maskify = (pass) => pass.slice(0, -4).replace(/./g, "#") + pass.substr(pass.length - 4);


console.log(maskify("123jjkjhkk456"));

console.log('-----------------ex5.7-----------------');

const shortest = (str) => str.split(" ").reduce((a, b) => a.length <= b.length ? a : b)

console.log(shortest("hi from where are u ?"));

console.log('-----------------ex5.8-----------------');

const longest = (str) => str.split(" ").reduce((a, b) => a.length >= b.length ? a : b)

console.log(longest("hi from where are u ?"));