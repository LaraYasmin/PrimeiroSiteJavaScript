var nome = "\n\nSite de uso individual, não está associado a nenhuma empresa, todo o conteúdo disponibilizado é autorizado. Todos os direitos reservados.";
var data = "11/06/2020";
alert("Ao entrar neste site, você concorda com os termos de uso: " + nome + "\nDisponível desde: " + data);
var idade = prompt("Digite qual sua idade para ter acesso ao site: "); //Browser faz uma pergunta ao usuário
if (idade < 12){
    alert("Página não disponível para menores de 12 anos!")
}else{
    alert("Seja bem vindo!")
};

function botao(){
    document.getElementById("Fotos").innerHTML = "Clique aqui para acessar";
}

function redirecionar(){
    window.open("https://www.instagram.com/lyaoliv18/?hl=pt-br"); // *Aqui abre em uma nova janela
//Ou: window.location.href = "https://www.instagram.com/lyaoliv18/?hl=pt-br"; *Aqui abre na mesma janela 
}

function trocar(){
    document.getElementById("mousemov").innerHTML = "Obrigado por passar o mouse";
}

/*
function botao(){ *Aqui, criei uma função botão que chamei no site, ou posso só não colocar o alert e fazer 
    um texto no body com <h3>Obrigado por clicar</h3> e aparecerá embaixo do botão
    alert("Obrigado por clicar");
}

function botao(){
    document.getElementById("agradecimento");
    console.log(document.getElementByiId("agradecimento"));
}


function botao(){
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar"; *Aqui, o texto será adicionado
    ao ato de dar uma resposta quando alguém clicar no botão
    console.log(document.getElementById("agradecimento"));
}

*/
