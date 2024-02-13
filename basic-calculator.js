function basicCalculator(n1, n2, operator) {
    if(operator === "+") {
        return console.log(n1 + n2);
    } else if(operator === "-") {
        return console.log(n1 - n2);
    } else if(operator === "*") {
        return console.log(n1 * n2);
    } else if(operator === "/") {
        return console.log(n1 / n2);;
    } else {
        return console.log(null);;
    }
}

basicCalculator(10, 5, "+");