console.log('-----------------ex3.1-----------------');

function nbYear(p0, percent, aug, p) {

  let howMany = 0;
  while (true) {
    if (p0 >= p) { return howMany; }
    p0 = p0 + p0 * percent / 100 + aug;
    howMany++;
  }
}
console.log(nbYear(1000, 2, 50, 1142))

console.log('-----------------ex3.2-----------------');


const stopForToday = [
  [3, 0],
  [2, 4],
  [7, 2],
  [4, 7],
  [6, 3],
  [0, 2]
]
const stopBus = (arr) => {
  goUp = 0;
  goDown = 0;
  arr.flat().map((item, i) => (i % 2 == 0 ? goUp += item : goDown += item))
  finishDrive = goUp - goDown;
  return finishDrive >= 0 ? finishDrive : "An Erorr On Data"
}


console.log(stopBus(stopForToday));


console.log('-----------------ex4.1-----------------');

const fibonacci = (num) => {
  if (num < 3) return 1;
  let first = 0; //1//1//2//3
  let next = 1; //1 //2//3//5
  for (i = 2; i < num; i++) {
    const ans = first + next; //1 //2//3//5//8
    first = next; //1 //1//2//3
    next = ans//1//2//3//5
  }
  return next
};
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

console.log(fibonacci(12));

