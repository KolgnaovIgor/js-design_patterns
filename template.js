class Employee{
    constructor(name,salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities(){

    }

    work(){
        return `${this.name} doing ${this.responsibilities()}`
    }

    getPaid(){
        return `${this.name} have salary ${this.salary}`
    }
}

class Developer extends Employee{
    constructor(name,salary) {
        super(name,salary)
    }

    responsibilities() {
        return `Developing program`
    }
}

class Tester extends Employee{
    constructor(name,salary) {
        super(name,salary)
    }

    responsibilities() {
        return `Testing program`
    }
}

const dev = new Developer('Igor','$500')
console.log(dev.getPaid())
console.log(dev.work())

const test = new Tester('Vika','$300')
console.log(test.getPaid())
console.log(test.work())