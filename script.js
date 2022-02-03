function insert(simboloOuNumero) { //adiciona um algarismo
    var simbnum = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = simboloOuNumero + simbnum;
}

function clean() { //"Exclui toda a tela"
    document.getElementById("resultado").innerHTML = "";
}

function del() //Diminui um algarismo/deleta
{
    var numero = document.getElementById("resultado").innerHTML; //pega o que ta escrito e armazena
    document.getElementById("resultado").innerHTML = numero.substring(0, numero.length - 1);
}

function calcular() {

    var calcular = document.getElementById("resultado").innerHTML;
    //C</X-+

    if (calcular != "") {
        try { //tratamento de erro;
            var Total = eval(calcular);
            document.getElementById("resultado").innerHTML = Total.toFixed(2); //toFixed - deixa a mostra duas casas depois da virgula
        } catch (error) {
            document.getElementById("resultado").innerHTML = "Operação Inválida";

        }

    } else {
        document.getElementById("resultado").innerHTML = "0";
    }
}