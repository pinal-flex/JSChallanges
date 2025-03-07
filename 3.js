// Which Function Returns the Larger Number?
// Your function will be passed two functions, f and g, that don't take any parameters.
// Your function has to call them, and return a string which indicates which function returned the larger number.
// This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).

function whichIsLarger(f,g){
    const fResult = f();
    const gResult = g();
    return fResult>gResult ? "f" : gResult>fResult ? "g" : "neither";
}
console.log(whichIsLarger(() => 5, () => 10));
console.log(whichIsLarger(() => 25,  () => 25));
console.log(whichIsLarger(() => 505050, () => 5050));
