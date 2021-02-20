console.log('-----------------ex-1.1-----------------');

const yesOrNo = (ask) => ask ? true : false;

console.log(yesOrNo(0));

console.log('-----------------ex2.1-----------------');

const mins = (arr) => {

    let num1 = Math.min(...arr);
    newarr = arr.filter(item => item !== num1)
    let num2 = Math.min(...newarr);
    return num1 + num2;
}

console.log(mins([10, 343445353, 3453445, 3453545353453]));

console.log('-----------------ex2.2-----------------');

const toInteger = (bin) => parseInt(bin.join(''), 2);

console.log(toInteger([1, 1, 1, 1]));


console.log('-----------------ex2.3-----------------');

const nextOne = (a) => Number.isInteger(Math.sqrt(a)) ? Math.pow(Math.ceil((Math.sqrt(a) + 1)), 2) : -1;

console.log(nextOne(625));

console.log('-----------------ex2.4-----------------');


function theSame(arr) {
    return arr.find(function (num) {
        return arr.indexOf(num) === arr.lastIndexOf(num);
    }) || "All the same";
}

console.log(theSame([1, 1, 1, 1, 555, 1, 1, 1, 1]));

console.log('-----------------ex2.5-----------------');


const sumMe = (x) => {
    let sum = 0;
    for (let i = 1; i <= x; i++) {

        sum += i;
    } return sum;
}

console.log(sumMe(8));

console.log('-----------------ex2.6-----------------');


const centuryFromYear = (year) => Math.ceil(year / 100);

console.log(centuryFromYear(1799));

console.log('-----------------ex2.7-----------------');


const basicOp = (ope, num1, num2,) => eval(num1 + ope + num2);

console.log(basicOp('/', 49, 7));
