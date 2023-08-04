"use strict";
class Person {
    constructor(name, age) {
        this.gender = {
            gender: "male/female/other",
            orientation: "//straight/etc...",
            pronouns: "he/she/him..."
        };
        this.address = "2-73";
        this.email = "111ma...";
        this.phone = [];
        this.git = "MANI-116";
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hello " + this.name + ".glad you are " + this.age + " years old.";
    }
}
console.log(new Person("mani", 22).greet());
//# sourceMappingURL=index.js.map