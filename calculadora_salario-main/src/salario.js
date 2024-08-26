// salario.js
export class Salario {
  constructor(salarioBase, descontos, beneficios = 0, bonificacoes = 0) {
    this.salarioBase = salarioBase;
    this.descontos = descontos;
    this.beneficios = beneficios;
    this.bonificacoes = bonificacoes;
  }

  salarioBruto() {
    return this.salarioBase + this.beneficios + this.bonificacoes;
  }

  salarioLiquido() {
    return this.calculo(this.salarioBruto(), this.descontos);
  }

  calculo(valor_um, valor_dois) {
    return valor_um - valor_dois;
  }

  definirBeneficios(beneficios) {
    this.beneficios = beneficios;
  }

  definirBonificacoes(bonificacoes) {
    this.bonificacoes = bonificacoes;
  }

  obterResumo() {
    return {
      salarioBase: this.salarioBase,
      beneficios: this.beneficios,
      bonificacoes: this.bonificacoes,
      descontos: this.descontos,
      salarioBruto: this.salarioBruto(),
      salarioLiquido: this.salarioLiquido()
    };
  }
}
