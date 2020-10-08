function calc() {
  let buy = parseInt(document.getElementById("buy").value);
  let installment = parseInt(document.getElementById("installment").value);

  if (installment >= 0 && installment < 2) {
    document.getElementById(
      "resultCalcParcela"
    ).innerHTML = `<br /><br />  ${installment}x de R$ ${(
      buy / installment
    ).toFixed(2)}`;
    document.getElementById("resultCalcValor").innerHTML =
      "<br /> Parcela com juros de 0%";
  } else if (installment >= 2 && installment < 4) {
    document.getElementById(
      "resultCalcParcela"
    ).innerHTML = `<br /><br />  ${installment}x de R$ ${(
      (buy / installment) *
      3
    ).toFixed(2)}`;
    document.getElementById("resultCalcValor").innerHTML =
      "<br /> Parcela com juros de 3%";
  } else if (installment >= 4) {
    document.getElementById(
      "resultCalcParcela"
    ).innerHTML = `<br /><br />  ${installment}x de R$ ${(
      (buy / installment) *
      7
    ).toFixed(2)}`;
    document.getElementById("resultCalcValor").innerHTML =
      "<br /> Parcela com juros de 7%";
  } else {
    document.getElementById("resultCalcValor").innerHTML =
      "<br /> Impossível calcular o valor do parcelamento";
  }
}

function pairOrOdd() {
  let pairOrOdd = parseInt(document.getElementById("pairOrOdd").value);

  let result = pairOrOdd % 2;

  switch (result) {
    case 0:
      document.getElementById("resultPairOrOdd").innerHTML =
        "<br /> Seu número é par!";
      break;
    case 1:
      document.getElementById("resultPairOrOdd").innerHTML =
        "<br /> Seu número é impar!";
      break;
    default:
      document.getElementById("resultPairOrOdd").innerHTML =
        "<br /> Número não localizado";
      break;
  }
}

function whichNumberIsHigher() {
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);

  if (valor1 > valor2) {
    document.getElementById("HigherNumber").innerHTML =
      "<br /> O valor do número 1 é maior que o do número 2";
  } else if (valor2 > valor1) {
    document.getElementById("HigherNumber").innerHTML =
      "<br /> O valor do número 2 é maior que o do número 1";
  } else if (valor1 == valor2) {
    document.getElementById("HigherNumber").innerHTML =
      "<br /> Ambos os números são iguais";
  } else {
    document.getElementById("HigherNumber").innerHTML =
      "<br /> Número não localizado";
  }
}

function test() {
  let nota1 = parseInt(document.getElementById("nota1").value);
  let nota2 = parseInt(document.getElementById("nota2").value);
  let nota3 = parseInt(document.getElementById("nota3").value);

  if (
    nota1 >= 0 &&
    nota1 <= 10 &&
    nota2 >= 0 &&
    nota2 <= 10 &&
    nota3 >= 0 &&
    nota3 <= 10
  ) {
    let result = (nota1 + nota2 + nota3) / 3;

    if (result >= 6) {
      document.getElementById("resultTest").innerHTML =
        "<br /> Você foi Aprovado";
    } else if (result >= 3 && result < 6) {
      document.getElementById("resultTest").innerHTML =
        "<br /> Você está de Exame";
    } else {
      document.getElementById("resultTest").innerHTML =
        "<br /> Infelismente você foi Reprovado.";
    }
  } else {
    alert("As notas tem que ser supeior a 0 e inferior a 10");
  }
}

function payment() {
  let valueBuy = parseInt(document.getElementById("valueBuy").value);
  let payment = parseInt(document.getElementById("payment").value);

  if (payment > 0 && payment < 4) {
    switch (payment) {
      case 1:
        document.getElementById(
          "valueFinal"
        ).innerHTML = `<br /> Você ira pagar: R$ ${valueBuy - valueBuy * 0.1}`;
        break;
      case 2:
        document.getElementById(
          "valueFinal"
        ).innerHTML = `<br /> Você ira pagar: R$ ${valueBuy * 1.02}`;
        break;
      case 3:
        document.getElementById(
          "valueFinal"
        ).innerHTML = `<br /> Você ira pagar: R$ ${valueBuy * 1.07}`;
        break;
    }
  } else {
    alert("Opção selecionada inválida");
  }
}

function calcIMG() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let sex = document.getElementById("sex").value;

  let imc = weight / (height * height);

  if (sex == "noSelect") {
    alert("Selecione o sexo");
  } else if (sex == "Feminino") {
    if (imc < 19.1) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Você está abaixo do peso!`;
    } else if (imc >= 19.1 && imc < 25.8) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Está no peso normal`;
    } else if (imc >= 25.8 && imc < 27.3) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Você está marginalmente acima do peso`;
    } else if (imc >= 27.3 && imc < 32.3) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Você está acima do peso normal`;
    } else if (imc >= 32.4) {
      document.getElementById("resulIMC").innerHTML = `<br />Obeso`;
    }
  } else if (sex == "Masculino") {
    if (imc < 20.7) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Você está abaixo do peso!`;
    } else if (imc >= 20.7 && imc < 26.4) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Está no peso normal`;
    } else if (imc >= 26.4 && imc < 27.8) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Você está marginalmente acima do peso`;
    } else if (imc >= 27.8 && imc < 31.1) {
      document.getElementById(
        "resulIMC"
      ).innerHTML = `<br />Você está acima do peso normal`;
    } else if (imc >= 31.1) {
      document.getElementById("resulIMC").innerHTML = `<br />Obeso`;
    }
  } else {
    alert("Erro interno!");
  }
}

function incomeTax() {
  let salary = parseFloat(document.getElementById("salary").value);

  if (salary >= 0 && salary <= 1434) {
    document.getElementById("incomeTax").innerHTML = `<br />Isento`;
  } else if (salary > 1434 && salary <= 2150) {
    document.getElementById(
      "incomeTax"
    ).innerHTML = `<br />O valor a ser pago é de R$ ${(salary * 1.075).toFixed(
      2
    )}`;
  } else if (salary > 2150 && salary <= 2866) {
    document.getElementById(
      "incomeTax"
    ).innerHTML = `<br />O valor a ser pago é de R$ ${(salary * 1.15).toFixed(
      2
    )}`;
  } else if (salary > 2866 && salary <= 3582) {
    document.getElementById(
      "incomeTax"
    ).innerHTML = `<br />O valor a ser pago é de R$ ${(salary * 1.225).toFixed(
      2
    )}`;
  } else if (salary > 3582) {
    document.getElementById(
      "incomeTax"
    ).innerHTML = `<br />O valor a ser pago é de R$ ${(salary * 1.275).toFixed(
      2
    )}`;
  } else {
    document.getElementById("incomeTax").innerHTML = `<br />Valor inválido`;
  }
}

function calculadora() {
  let operador1 = parseFloat(document.getElementById("operador1").value);
  let operador2 = parseFloat(document.getElementById("operador2").value);
  let opc = document.getElementById("opc").value;
  let resultoperador;

  if (opc == "noSelect") {
    alert("Selecione um operador");
  } else {
    switch (opc) {
      case "Soma":
        resultoperador = operador1 + operador2;
        document.getElementById(
          "calculadora"
        ).innerHTML = `<br />O resultado é ${resultoperador}`;
        break;
      case "Sobtração":
        resultoperador = operador1 - operador2;
        document.getElementById(
          "calculadora"
        ).innerHTML = `<br />O resultado é ${resultoperador}`;
        break;
      case "Miltiplicação":
        resultoperador = operador1 * operador2;
        document.getElementById(
          "calculadora"
        ).innerHTML = `<br />O resultado é ${resultoperador}`;
        break;
      case "Divisão":
        resultoperador = operador1 / operador2;
        document.getElementById(
          "calculadora"
        ).innerHTML = `<br />O resultado é ${resultoperador}`;
        break;
      default:
        document.getElementById(
          "calculadora"
        ).innerHTML = `<br />Valor inválido`;
        break;
    }
  }
}
