let arr = [1, 6, 9, 15];
let m;

for (let n = (arr.length - 1) * -1; n < arr.length; n++ ){
(n <= -1) ? m = n * -1 :  m = n;
console.log('n = ' + arr[m]);
}
