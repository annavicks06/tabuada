let numero, saida,i; 
function Gerar() {
    numero = Number (document.getElementById("numero").value);
    //Pega o valor digitado no input com id ="numero"
    //e converte para numero
    saida =""
    if (numero <0) {
        saida = "Digite um numero maior que zero."
        //Mensagem de erro
    }
    else if (numero >10) {
        saida = "Numero grande! Tente Outro."
    }

    else {
    for (i=0; i<=10;i++) {
        saida = saida + numero + "x" + i + "=" + (numero*i) + "<br>"; 
    }
    
    }
 document.getElementById("resultado").innerHTML = saida;
 }

    function Mostrar() 
{
    let alunos = ["Anna", "Bruna", "Maria Eduarda", "Manoela"];

    let saida2 ="";
    for (let a= 0; a <alunos.length; a++) {
        saida2 = saida2 + alunos[a] + "<br>";
    }
    document.getElementById("alunos").innerHTML = saida2;
}

