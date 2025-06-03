 class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}
 class Dog extends Animal {
    constructor(name: string) {
        super(name); // Вызов конструктора базового класса
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
console.log(dog);
class Camel {
    constructor() {
    }

}