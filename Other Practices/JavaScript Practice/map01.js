let map = new Map();

map.set('Sayantan', 'JS');
map.set('Sayan Roy', 'java');
map.set('Sayandeep', 'Python');
map.set('Sayantan', 'React');        // IT WILL UPDATE THE VALUE FOR THE KEY 'Sayantan' AS 'React' FROM 'JS'
map.set(1,'abc');

console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.get('Sayantan'));
console.log(map.has('Sayandeep'));
map.delete(1);
console.log(map);

// for (let [key,value] of map){
//     console.log(key, " : ", value);
// }


map.forEach((value,key) => {
    console.log(key," : ", value);
})


map.clear()     //CLEARS THE WHOLE MAP
console.log(map);