import React from "react";
import { Salario } from './salario.js';


function App() {
  // Cria uma instância da classe Salario
  const salario = new Salario(1500, 600); 

  // Define benefícios e bonificações
  salario.definirBeneficios(100);
  salario.definirBonificacoes(100);

  // Obtém o resumo do salário
  const resumo = salario.obterResumo();

  // Logs para testes
  console.log('Resumo do Salário:', resumo);

  return (
    <div>
      <h1> Testes </h1>
      <p>Salário Base: R$ {resumo.salarioBase}</p>
      <p>Benefícios: R$ {resumo.beneficios}</p>
      <p>Bonificações: R$ {resumo.bonificacoes}</p>
      <p>Descontos: R$ {resumo.descontos}</p>
      <p>Salário Bruto: R$ {resumo.salarioBruto}</p>
      <p>Salário Líquido: R$ {resumo.salarioLiquido}</p>
    </div>
  );
}

export default App;
