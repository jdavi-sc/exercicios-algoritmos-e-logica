var sexo = (prompt("Informe o seu sexo: "));
var altura = parseFloat(prompt("informe a sua altura: "));
var peso = parseFloat(prompt("Informe o seu peso: "));

homem = (72.7*altura) - 58;
mulher = (62.1*altura) - 44,7;

if(sexo = homem){;
    console.log("Seu peso ideal: ", homem);
}else{
    console.log("Seu peso ideal: ", mulher);
}