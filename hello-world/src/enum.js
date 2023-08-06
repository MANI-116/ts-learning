var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["Add"] = 0] = "Add";
    Arithmetic[Arithmetic["Mul"] = 1] = "Mul";
    Arithmetic[Arithmetic["Div"] = 2] = "Div";
    Arithmetic[Arithmetic["Sub"] = 3] = "Sub";
})(Arithmetic || (Arithmetic = {}));
function calculate(a, b, type) {
    console.log("calulate " + type + " of " + a + " and " + b);
}
var ans = calculate(1, 3, Arithmetic.Mul);
