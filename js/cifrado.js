function desifrado_cifrado(texto, desplazamiento,accion){
    const abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';
    desplazamiento = desplazamiento % abecedario.length;

    for (let i=0;i < texto.length; i++){
        const letraActual = texto[i].toUpperCase();
        const indiceActual = abecedario.indexOf(letraActual);

        if(indiceActual === -1){
            resultado += letraActual;
        }else{
            let nuevoIndice
            if(accion == 1){
             nuevoIndice = (indiceActual + desplazamiento)%abecedario.length;
        }else{ 
             nuevoIndice = (indiceActual - desplazamiento)%abecedario.length;
             if(nuevoIndice < 0){
                nuevoIndice += abecedario.length;
            }
            }
            resultado += abecedario[nuevoIndice];
         
        }
    }
    return resultado;
}
/*
let textoOriginal = "ZGDS";
let desplazamiento = 18;
let textoCifrado = desifrado_cifrado(textoOriginal,desplazamiento,0);
console.log(textoCifrado);*/

export default desifrado_cifrado; 