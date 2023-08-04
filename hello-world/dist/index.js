"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hello " + this.name + ".glad you are " + this.age + " years old.";
    }
}
console.log(new Person("mani", 22).greet());
//# sourceMappingURL=index.js.map