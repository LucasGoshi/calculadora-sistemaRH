// Valida a tecla "Enter"
document.addEventListener("keypress", function (enter) {
    if (enter.key === 'Enter') {
        enter.preventDefault();
        var btn = document.querySelector("#submit");

        btn.click(enter);

    }
});

function calcularSalarioLiquido() {
    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    let descontoINSS = 0;
    let descontoIRRF = 0;
    let descontos = parseFloat(document.getElementById("descontos").value) || 0;
    let ARinss = 0;
    let ARirrf = 0;
    const tabelaResultados = document.querySelector('.tabelaResultados');
    tabelaResultados.style.display = 'table';

    // Calcular o desconto de INSS
    if (salarioBruto <= 1320.00) {
        descontoINSS = salarioBruto * 0.075;
        ARinss = 7.5;
        salarioLiquido = salarioBruto - descontoINSS - descontos;
    } 
        else if (salarioBruto > 1320.00 && salarioBruto <= 2571.29) {
            descontoINSS =  salarioBruto * 0.09;
            ARinss = 9;
            salarioLiquido = salarioBruto - descontoINSS - descontos;
    } 
        else if (salarioBruto > 2571.29 && salarioBruto <= 3856.94) {
            descontoINSS = salarioBruto * 0.12;
            ARinss = 12;
            salarioLiquido = salarioBruto - descontoINSS - descontos;
    } 
        else if (salarioBruto > 3856.94) {
            descontoINSS = salarioBruto * 0.14;
            ARinss = 14;
            salarioLiquido = salarioBruto - descontoINSS - descontos;
    }

    // Calcular o desconto de IRRF
    if (salarioBruto <= 1903.98) {
        descontoIRRF = 0;
        ARirrf = 0;
    } 
        else if (salarioBruto > 1903.98 && salarioBruto <= 2826.65) {
            descontoIRRF = salarioBruto * 0.075;
            ARirrf = 7.5;
            salarioLiquido -= descontoIRRF;
        }
        else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
            descontoIRRF = salarioBruto * 0.15;
            ARirrf = 15;
            salarioLiquido -= descontoIRRF;
        }
        else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
            descontoIRRF = salarioBruto * 0.225;
            ARirrf = 22.5;
            salarioLiquido -= descontoIRRF;
        }
        else if (salarioBruto > 4664.68) {
            descontoIRRF = salarioBruto * 0.275;
            ARirrf = 27.5;
            salarioLiquido -= descontoIRRF;
        }

    document.getElementById("mostraSalarioBruto").innerHTML = `R$ ${salarioBruto.toFixed(2)}`;
    document.getElementById("mostraARinss").innerHTML = `${ARinss}%`;
    document.getElementById("mostraDescontoINSS").innerHTML = `R$ ${descontoINSS.toFixed(2)}`;
    document.getElementById("mostraARirrf").innerHTML = `${ARirrf}%`;
    document.getElementById("mostraDescontoIRRF").innerHTML = `R$ ${descontoIRRF.toFixed(2)}`;
    document.getElementById("mostraDescontos").innerHTML = `R$ ${descontos.toFixed(2)}`;
    document.getElementById("mostraSalarioLiquido").innerHTML = `R$ ${salarioLiquido.toFixed(2)}`;
}

function calcularFerias() {
    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    let diasFerias = parseInt(document.getElementById('diasFerias').value);
    let abonoPecuniario = document.getElementById("abonoPecuniario").value;
    let descontoINSS = 0;
    let descontoIRRF = 0;

    let ARinss = 0;
    let ARirrf = 0;

    let salarioFerias =  salarioBruto * diasFerias / 30;
    let tercoFerias = salarioFerias / 3;

    let abono = salarioBruto / 3;
    let tercoAbono = abono / 3;
    let somaAbono = 0;
    const tabelaResultados = document.querySelector('.tabelaResultados');
    tabelaResultados.style.display = 'table';

    // Calcular o desconto de INSS
    if (salarioBruto <= 1320.00) {
        descontoINSS = salarioBruto * 0.075;
        ARinss = 7.5;
    } 
        else if (salarioBruto > 1320.00 && salarioBruto <= 2571.29) {
            descontoINSS =  salarioBruto * 0.09;
            ARinss = 9;
    } 
        else if (salarioBruto > 2571.29 && salarioBruto <= 3856.94) {
            descontoINSS = salarioBruto * 0.12;
            ARinss = 12;
    } 
        else if (salarioBruto > 3856.94) {
            descontoINSS = salarioBruto * 0.14;
            ARinss = 14;
    }

    // Calcular o desconto de IRRF
    if (salarioBruto <= 1903.98) {
        descontoIRRF = 0;
        ARirrf = 0;
    } 
        else if (salarioBruto > 1903.98 && salarioBruto <= 2826.65) {
            descontoIRRF = salarioBruto * 0.075;
            ARirrf = 7.5;
        }
        else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
            descontoIRRF = salarioBruto * 0.15;
            ARirrf = 15;
        }
        else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
            descontoIRRF = salarioBruto * 0.225;
            ARirrf = 22.5;
        }
        else if (salarioBruto > 4664.68) {
            descontoIRRF = salarioBruto * 0.275;
            ARirrf = 27.5;
        }

    if (abonoPecuniario === 'sim') {
        somaAbono = abono + tercoAbono;
        document.getElementById("mostraAbono").innerHTML = `R$ ${abono.toFixed(2)}`;
        document.getElementById("mostraTercoAbono").innerHTML = `R$ ${tercoAbono.toFixed(2)}`;
    } else {
        document.getElementById("mostraAbono").innerHTML = `R$ 0.00`;
        document.getElementById("mostraTercoAbono").innerHTML = `R$ 0.00`;
    }

    var totalFerias =  salarioFerias + tercoFerias + somaAbono - descontoINSS - descontoIRRF;

    document.getElementById("mostraSalarioFerias").innerHTML = `R$ ${salarioFerias.toFixed(2)}`;
    document.getElementById("mostraTercoSalarioFerias").innerHTML = `R$ ${tercoFerias.toFixed(2)}`;
    document.getElementById("mostraARinss").innerHTML = `${ARinss}%`;
    document.getElementById("mostraDescontoINSS").innerHTML = `R$ ${descontoINSS.toFixed(2)}`;
    document.getElementById("mostraARirrf").innerHTML = `${ARirrf}%`;
    document.getElementById("mostraDescontoIRRF").innerHTML = `R$ ${descontoIRRF.toFixed(2)}`;
    document.getElementById("mostraTotalFerias").innerHTML = `R$ ${totalFerias.toFixed(2)}`;
}

function calcularRescisao() {
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    const contratacao = new Date(document.getElementById("contratacao").value);
    const demissao = new Date(document.getElementById("demissao").value);
    const motivo = document.getElementById("motivo").value;
    let calculoRescisao = 0;

    let diasTrabalhados = demissao.getDate() + 1;
    let mesesTrabalhados = (demissao.getFullYear() - contratacao.getFullYear()) * 12 +
    (demissao.getMonth() - contratacao.getMonth());
    let anosTrabalhados = demissao.getFullYear() - contratacao.getFullYear();

    let saldoSalario = (salarioBruto / 30) * diasTrabalhados;
    let tercoSalario = salarioBruto / 3;
    let feriasVencidas = 0;
    let feriasProporcionais = ((salarioBruto * mesesTrabalhados) / 12 + tercoSalario);
    let decimoTerceiro = ((salarioBruto/12) * mesesTrabalhados);
    let avisoPrevioIndenizado = ((30 + (3 * anosTrabalhados)) * (salarioBruto / 30));
    let multaFGTS = 0;

    const feriasVencidasCheckbox = document.getElementById("feriasVencidas");
    if (feriasVencidasCheckbox.checked) {
        feriasVencidas = salarioBruto + tercoSalario;
    }

    // Cálculo de demissão por acordo comum
    if (motivo === "acordoComum") {
        multaFGTS = (((salarioBruto * 0.08) * mesesTrabalhados) * 0.20);
        calculoRescisao =  saldoSalario + decimoTerceiro + feriasProporcionais + feriasVencidas + (avisoPrevioIndenizado / 2) + multaFGTS; 
    }

    // Cálculo de demissão sem justa causa
    else if (motivo === "semJC") {
        multaFGTS = (((salarioBruto * 0.08) * mesesTrabalhados) * 0.40);
        calculoRescisao = saldoSalario + decimoTerceiro + feriasProporcionais + feriasVencidas + avisoPrevioIndenizado + multaFGTS
    }

    // Cálculo de demissão por justa causa
    else if (motivo === "comJC") {
        calculoRescisao = saldoSalario + feriasVencidas;
        feriasProporcionais = 0;
        decimoTerceiro = 0;
        avisoPrevioIndenizado = 0;
    }

    // Cálculo de pedido de demissão
    else if (motivo === "pedidoD") {
        calculoRescisao = saldoSalario + decimoTerceiro + feriasProporcionais + feriasVencidas;
        avisoPrevioIndenizado = 0;
    } 

    const tabelaResultados = document.querySelector('.tabelaResultados');
    tabelaResultados.style.display = 'table';
    
    document.getElementById("mostraSaldoFerias").innerHTML = `R$ ${saldoSalario.toFixed(2)}`;
    document.getElementById("mostraFeriasVen").innerHTML = `R$ ${feriasVencidas.toFixed(2)}`;
    document.getElementById("mostraFeriasPropor").innerHTML = `R$ ${feriasProporcionais.toFixed(2)}`;
    document.getElementById("mostraDecimoTer").innerHTML = `R$ ${decimoTerceiro.toFixed(2)}`;
    document.getElementById("mostraAvisoPrevio").innerHTML = `R$ ${avisoPrevioIndenizado.toFixed(2)}`;
    document.getElementById("mostraCalculoRescisao").innerHTML = `R$ ${calculoRescisao.toFixed(2)}`;
    document.getElementById("mostraFGTS").innerHTML = `R$ ${multaFGTS.toFixed(2)}`;

    const tabelaNumDatas = document.querySelector('.tabelaNumDatas');
    tabelaNumDatas.style.display = 'table';

    document.getElementById("mostraDia").innerHTML = `R$ ${diasTrabalhados}`;
    document.getElementById("mostraMes").innerHTML = `R$ ${mesesTrabalhados}`;
    document.getElementById("mostraAno").innerHTML = `R$ ${anosTrabalhados}`;
}
