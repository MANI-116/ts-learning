interface Circle{
    radius:number

}
interface Square{
    side:number
}
interface Rectangle{
    width:number,
    height:number
}


function render1(shape: Circle | Square | Rectangle){
    console.log("rendering..")
}

function calculateArea1(shape: Circle | Square | Rectangle){
    console.log("calculate Area");
}


/* we can do better as follws using types in TS*/

type Shape = Square | Rectangle | Circle

function render2(shape: Shape ){
    console.log("rendering..")
}

function calculateArea2(shape: Shape){
    console.log("calculate Area");
}
