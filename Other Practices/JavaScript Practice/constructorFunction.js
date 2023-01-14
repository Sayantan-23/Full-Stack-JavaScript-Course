function Laptop(cpu, gpu, ram){
    this.CPU = cpu
    this.GPU = gpu
    this.RAM = ram
    this.greet = function(){
        console.log("Hello programmer")
    }
}

let laptop1 = new Laptop('i7','RTX 3050','8gb')
let laptop2 = new Laptop('r7','RTX 3050', '16gb')
let laptop3 = new Laptop('r5','gtx 1050','4gb')

console.log(laptop1.CPU)