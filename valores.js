let pac = document.getElementById("pac")
let sho = document.getElementById("sho")
let pas = document.getElementById("pas")
let dri = document.getElementById("dri")
let def = document.getElementById("def")
let phy = document.getElementById("phy")
let over = document.getElementById("nada")

function load(){
    if(pac.value == '' || sho.value == "" || pas.value == "" || dri.value == "" || def.value == "" || phy.value == "" ){
        alert('Está faltando um ou mais valores')
    }else{
        if(pac.value < '0' || sho.value < "0" || pas.value < "0" || dri.value < "0" || def.value < "0" || phy.value < "0"){
        alert('O valor não pode ser inferior a 1')
        }else{            
            let soma = parseFloat(pac.value) + parseFloat(sho.value) + parseFloat(pas.value) + parseFloat(dri.value) + parseFloat(def.value) + parseFloat(phy.value)
            let divisao = soma/6
            let valorfinal = Math.round(divisao)
            console.log(valorfinal)
            over.value = valorfinal           
    }
        
        
    }
}