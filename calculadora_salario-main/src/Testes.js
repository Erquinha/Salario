import { Salario } from './salario.js';

function verificarResultado(esperado, real, mensagem) {
  if (JSON.stringify(esperado) === JSON.stringify(real)) {
    console.log(`OK ${mensagem} passou.`);
  } else {
    console.log(`ERRO: ${mensagem} falhou. Esperando: ${JSON.stringify(esperado)}, Obtido: ${JSON.stringify(real)}`);
  }
}

const salario = new Salario(1500, 600);

// Teste para o cálculo do salário bruto
verificarResultado(1700, salario.salarioBruto(), "01 - Testando Salário Bruto");

// Teste para o cálculo do salário líquido
verificarResultado(1100, salario.salarioLiquido(), "02 - Testando Salário Líquido");

// Teste para definir benefícios e verificar salário bruto e líquido
salario.definirBeneficios(200);
salario.definirBonificacoes(100);
verificarResultado(1800, salario.salarioBruto(), "03 - Testando Salário Bruto com Benefícios e Bonificações");
verificarResultado(1200, salario.salarioLiquido(), "04 - Testando Salário Líquido com Benefícios e Bonificações");

// Teste para definir apenas bonificações e verificar salário bruto e líquido
salario.definirBeneficios(0);
salario.definirBonificacoes(300);
verificarResultado(1800, salario.salarioBruto(), "05 - Testando Salário Bruto com Bonificações");
verificarResultado(1200, salario.salarioLiquido(), "06 - Testando Salário Líquido com Bonificações");

// Teste para definir descontos e verificar salário líquido
salario.definirBeneficios(0);
salario.definirBonificacoes(0);
salario.descontos = 700;
verificarResultado(1500, salario.salarioBruto(), "07 - Testando Salário Bruto com Descontos");
verificarResultado(800, salario.salarioLiquido(), "08 - Testando Salário Líquido com Descontos");

// Teste para caso sem benefícios e bonificações
salario.definirBeneficios(0);
salario.definirBonificacoes(0);
verificarResultado(1500, salario.salarioBruto(), "09 - Testando Salário Bruto sem Benefícios e Bonificações");
verificarResultado(900, salario.salarioLiquido(), "10 - Testando Salário Líquido sem Benefícios e Bonificações");

// Teste para valores negativos (se desejar incluir)
salario.definirBeneficios(-100);
salario.definirBonificacoes(-50);
salario.descontos = 200;
verificarResultado(1250, salario.salarioBruto(), "11 - Testando Salário Bruto com Benefícios e Bonificações Negativas");
verificarResultado(1050, salario.salarioLiquido(), "12 - Testando Salário Líquido com Benefícios e Bonificações Negativas");
