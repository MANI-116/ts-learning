interface PersonInterface {
    name:string;
    age:number
}

class Person implements PersonInterface{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age ;
    }


greet():string{

    return "hello "+this.name+".glad you are "+this.age+" years old."
}
}




console.log(new Person("mani",22).greet());

