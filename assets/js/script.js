let balans = document.getElementById("balans")
let gelir = document.getElementById("plus")
let xerc = document.getElementById("minus")
let button = document.getElementById("button")
let firInp = document.getElementById("firInp")
let secInp = document.getElementById("secInp")
let qeyd = document.getElementById("qeydler")
let esc = document.getElementById("esc")
let first = document.getElementById("first")
let second = document.getElementById("second")

 esc.style.display = "none"

function emeliyat(){
    
}


button.addEventListener("click" , function(){

    qeyd.innerHTML+=`
    
    <span id="first">${firInp.value}</span>
                    
    <span id="second">${secInp.value}</span>
    `
    let mebleg = secInp.value
    first.innerHTML = firInp.value
    second.innerHTML = mebleg
    balans.innerHTML = mebleg 
    if( mebleg < 0){
        xerc.innerHTML = mebleg
    }
    else{
        gelir.innerHTML = mebleg
        return;
    }
})
