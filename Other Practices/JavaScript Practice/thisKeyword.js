let laptop1 = {
    cpu : 'r7',
    ram : '8gb',
    gpu : 'RTX 3050',
    brand : {
        mainBrand : 'Lenovov',
        subBrand : 'Legion'
    },
    compare : function(other){
        if (this.cpu > other.cpu)
            console.log(this)
        else 
            console.log(other)
    },
}

let laptop2 = {
    cpu : 'r5',
    ram : '8gb',
    gpu : 'RTX 3050',
    brand : {
        mainBrand : 'Asus',
        subBrand : 'ROG'
    }
}

laptop1.compare(laptop2)