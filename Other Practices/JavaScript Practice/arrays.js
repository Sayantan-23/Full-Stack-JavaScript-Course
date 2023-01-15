//let array = new Array();
//let array = [];
let array = [5,7,8]
console.log(typeof array) // ARRAYS ARE ALSO OBJECTS IN JAVASCRIPT
array.push(4,7)
array.push(3)
array.push(9)
array.pop()
array.shift()
array.unshift(12)

console.log(array)
console.log(array.length)
console.log(array[3])
console.log(array.slice(2,5))
console.log(array.splice(3))


//ARRAY CAN HAVE DIFFERENT TYPE OF VALUES IN JAVASCRIPT...EVEN FUNCTIONS..BECAUSE FUCTIONS ARE BASICALLY OBJECTS
let data = ['Sayantan', 5, {tech : 'Python'}, function(user){console.log(`Hello ${user}`)}]

data[4] = 'Lenovo'
data[5] = true

console.log(data)

data[3]('Sayantan')



let array2 = [5,7,8,9,4]
let x = array2.splice(2,3)
console.log(array2)
console.log(x);