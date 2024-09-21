//alert("Olá, Raimund@ e todo mundo!!"); 
let nomeUsuário="";
let elemento = document.querySelector("#nome-usuário");


while (nomeUsuário =="")    
    {
    nomeUsuário = prompt("Oi visitante, como você se chama?");    
}
if (nomeUsuário ==" "){
    nomeUsuário = prompt("Oi visitante, como você se chama?");  
    elemento.textContent=nomeUsuário;  
}
else if(nomeUsuário==null){
    elemento.textContent = "welcome, muchach@s!";
}
else{
    elemento.textContent=nomeUsuário;
}