let user = "John Doe"
console.log(user)
student = "Inna"
console.log(student)
user=student
// user became the name Inna
console.log(user)


let test = 1;
test = test + 1;
console.log (test)
test = test +"1"
// to result "2" will write number 1 and as a result "21"
console.log (test)
test -=1;
// from 21 subtract 1 and the result will be 20
console.log (test)
if (test>10){
    test= true;
} else{
    test=  false;
 }
 // console will show "true"
    console.log (test)

let result = 1;
let array = [2, 3, 5, 8];
for (let i = 0; i < array.length; i++) 
{result = result * array[i];}
console.log (result);

let arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i=0; i < arr.length; i++) {
    if (arr[i] > 5 && arr[i] <10 ) { 
    console.log (arr[i]);}
    }

let array_next = [2, 5, 8, 15, 0, 6, 20, 3];
for (let x=0; x < array_next.length; x++) {
    if (array_next[x] % 2 == 0 ) { 
    console.log (array_next[x]);}
    }

function palindrome(str) {
    return str === str.split ("").reverse("").join("")
};
console.log (palindrome("lol"));

function min (a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}
console.log (min(8,4));

function min (a, b) {
    return a < b? a:b;
}
console.log (min(2,3));

const funcMax = function (a, y) {
    if (a > y) {
        return a;
    }
    else {
        return y;
    }
}
console.log (funcMax(1,6));

const functionMax = function max (a, y) {
    return a > y? a:y;
}
console.log (functionMax(10,4));

let arrayWithZero = [];
arrayWithZero [0] = 0;
arrayWithZero [1] = 3;
arrayWithZero [2] = 15;
arrayWithZero [3] = 10;
arrayWithZero [4] = 78;
arrayWithZero [5] = 60;
arrayWithZero [6] = 22;
arrayWithZero [7] = 80;
arrayWithZero [8] = 90;
arrayWithZero [9] = 42;
console.log (arrayWithZero);
let str = (arrayWithZero.join(","));
const newstr = str.replace(/0/gi, 'zero');
console.log (newstr.split(","));
   

