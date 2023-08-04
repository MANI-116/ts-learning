//interfaces uses Pascal naming convention
//interfaces can accumulate data of specific type
//interfaces can use other interfaces
//interfaces can extend interfaces
//interfaces can be implemented by classes

interface PersonGenderInterface {
    gender:string; //male/female/other
    orientation:string; //straight/etc...
    pronouns:string; //he,she,Mr.,Mrs.,
}

interface PersonContactDetails{
    address:string;
    email:string;
    phone:number[];
    git:string;
    
}

interface PersonInterface extends PersonContactDetails{ //interface extends interfaces
    name:string; //interfaces let you accumulate data of a specific type
    age:number;
    gender:PersonGenderInterface;   //interfaces uses interfaces
}



class Person implements PersonInterface{   //classes can implements interfaces
    name:string; 
    age:number;
    gender:PersonGenderInterface 
    = {
        gender : "male/female/other",
        orientation:"//straight/etc...",
        pronouns:"he/she/him..."
        } 
    address:string="2-73";
    email:string="111ma...";
    phone:number[]=[];
    git:string="MANI-116";

    constructor(name:string,age:number){
        this.name = name;
        this.age = age ;
    }


greet():string{

    return "hello "+this.name+".glad you are "+this.age+" years old."
}
}




console.log(new Person("mani",22).greet());

