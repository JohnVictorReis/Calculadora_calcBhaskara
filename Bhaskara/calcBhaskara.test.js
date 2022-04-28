import { calcDelta } from "./bhaskara"

//Teste de calculo delta
it('Descobrindo o delta com três valores (B* - 4xAxC)',() => {
    expect(calcDelta(2,8,-24)).toBe(256)
})

//Teste de calculo x1 e x2

it('Descobrindo o valor de x1 (-B + Raiz de Delta / 2.A)' , () => {
    expect(calcX(1,12,delta)).toBe(1)
})