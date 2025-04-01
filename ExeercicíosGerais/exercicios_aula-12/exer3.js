let array1 = []
for (let i = 0; i < 6; i++) {
    array1.push(a)
}

console.log(array1[1])
console.log(array1[4])
array1.splice(2,0,"Capitão America");
console.log(array1);
array1.push(array1);
console.log(array1);
array1.shift()
console.log(array1);
array1.pop()
console.log(array1);
console.log(array1.slice(0,2));
console.log(array1.slice(2,6))
console.log(array1.length)
array1.reverse()
console.log(array1)