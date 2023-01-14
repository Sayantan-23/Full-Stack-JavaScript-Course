let employee1 = {
    name : 'Sayantan',
    tech : 'JS',
    greet : function(user){                 //IT IS A METHOD...METHOD AND FUNCTIONS ARE BASICALLY SAME
        console.log(`Hello ${user}`)
    }
}

employee1.greet(employee1.name)




let employee2 = {
    name : 'Sayantan',
    tech : 'JS',
    greet : function(){                 
        console.log(`Hello ${this.name}`)       //USING "this" KEYWORD
    }
}

employee2.greet()