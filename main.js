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



