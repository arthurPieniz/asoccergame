let text = document.getElementById('username'); 
let nome = document.getElementById('name'); 
let vari

nome.value = 'Nome: ' + vari

    function exibir(){
        if(text.value === ""){
            alert("Digite seu nome")
        }else{
            vari = text.value     
            alert('Bem vindo ao Soccer Game ' + text.value)
            location.href="secondpage.html"       
            
        }
    }