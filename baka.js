"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // Вызов конструктора базового класса
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("Rex");
console.log(dog);
