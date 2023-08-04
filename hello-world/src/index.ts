function calculate(
    a:number ,
    b: number,
    type: 'sum' | 'mul' | 'div' | "diff"
 ) : number
    {
    if(type === 'sum')
    return a+b;
    if(type === 'div')
    return a/b;
    if(type === 'mul')
    return a*b;

    return a-b;
}

let ans = calculate(3,5,'mul');
console.log(ans);

