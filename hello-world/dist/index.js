"use strict";
function calculate(a, b, type) {
    if (type === 'sum')
        return a + b;
    if (type === 'div')
        return a / b;
    if (type === 'mul')
        return a * b;
    return a - b;
}
let ans = calculate(3, 5, 'mul');
console.log(ans);
//# sourceMappingURL=index.js.map