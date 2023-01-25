let input = 'name'

let employee = {
    name: 'Sayantan',
    tech: 'JS',
    'work exp': 0           //BAD PRACTICE...WE SHOULD USE "_" INSTEAD OF SPACE
}

console.log(employee.name);
console.log(employee.tech);
console.log(employee['work exp']);
console.log(employee[input]);



let programmer = {
    name : 'Sayantan',
    skills : 'js, python',
    laptop : {
        cpu : 'r7',
        ram : '8gb',
        gpu : 'RTX 3050',
        brand : {
            mainBrand : 'Lenovov',
            subBrand : 'Legion'
        }
    }
}

console.log(programmer.laptop.brand.subBrand.length)

delete programmer.laptop.brand.subBrand

console.log(programmer.laptop.brand.subBrand?.length)         // WE CAN PUT "?" IF WE ARE NOT SURE THE PROPERTY IS PRESENT IN THE OBJECT OR NOT


for(let key in programmer.laptop){
    console.log(key, programmer.laptop[key])
}


console.log(programmer["name"].toString());