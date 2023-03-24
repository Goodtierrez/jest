
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    expect(fromEuroToDollar(20)).toBe(24);

})


test("One dollar should be 106.58333333333334 yens", () => {
    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(4)).toBe(426.33333333333337);
    expect(fromDollarToYen(20)).toBe(2131.666666666667);

})

/* Si diera fallos por los decimales se debe poner 

expect(fromDollarToYen(4)).toBeCloseTo(106.58);*/


test("One yen shoud be 0.006254886630179828 pounds", () => {

    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(250)).toBe(1.5637216575449568);
    expect(fromYenToPound(13)).toBe(0.08131352619233777);


});