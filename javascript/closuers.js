function outerFunction(x) {
    function innerFunction(y) {
        return x + y
    }
    return innerFunction
}
console.log(outerFunction(5)(6));