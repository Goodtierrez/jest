// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

function fromDollarToYen(dollars) {
    let yen = dollars * oneEuroIs.JPY / oneEuroIs.USD;
    return yen;
}

console.log(fromDollarToYen(1));


const fromYenToPound = (yens) => {

    let pound = yens * oneEuroIs.GBP / oneEuroIs.JPY;
    return pound

}

console.log(fromYenToPound(250));




const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };