import { calcDelta } from "./bhaskara";
import { calcBhaskara } from "./bhaskara";
import { enviar } from "./bhaskara";

//Teste de calculo delta
it("Descobrindo o delta com três valores (B* - 4xAxC)", () => {
  expect(calcDelta(2, 8, -24)).toBe(256);
});

///Teste de calculo delta > 0
it("Calculando o valor de Bhaskara com Delta-Δ sendo maior que zero", () => {
    expect(calcBhaskara(1, -5, calcDelta(1, -5, 6))).toMatchObject({
      x1: 3,
      x2: 2,
    });
  });

//Teste de calculo delta == 0
it("Calculando o valor de Bhaskara com Delta-Δ sendo igual a zero", () => {
  expect(calcBhaskara(4, 4, calcDelta(4, 4, 1))).toMatchObject({
    x1: -0.5,
    x2: "indefinido",
  });
});

//Teste de calculo delta < 0
it("Calculando o valor de Bhaskara com Delta-Δ sendo menor que zero", () => {
  expect(calcBhaskara(4, 5, calcDelta(4, 5, 0))).toMatchObject({
    x1: "Valor inexistente",
    x2: "Valor inexistente",
  });
});
