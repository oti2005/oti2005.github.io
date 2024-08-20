import desifrado_cifrado from "./cifrado.js";

const mensaje=document.getElementById("mensaje");
const desplazamiento=document.getElementById("desplazamiento");
const boton_cifrar=document.getElementById("cifrar");
const boton_descifrar=document.getElementById("descifrar");

boton_cifrar.addEventListener("click",()=>{
    if(mensaje.value == ""){
        alert("ingresa tu mensaje secreto");
    }else if(desplazamiento.value ==""){
        alert("ingresa tu clave secreta");
    }else{
        let texto ="";
        let textoCifrado= desifrado_cifrado(mensaje.value,desplazamiento.value,1);
        texto += "El mensaje cifrado es:"
        texto += textoCifrado;
        document.getElementById("resultado").innerHTML=texto;
    }
})
function clearMsg(){
    txtMsg.value="";
    txtMsg.innerHTML="";
    Count.innerHTML="0/150";
}