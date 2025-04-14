let nome_usuario="";
let elemento = document.querySelector("#nome-usuario");
while(nome_usuario == " "){
    nome_usuario = prompt(qual seu nome?);
}
if (nome_usuario == null){
    elemento.textcontent = "seja bem vindo!";
}else{
    elemento.textcontent = nome_usuario
}