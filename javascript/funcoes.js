//let x = ""
//console.log(x)
//x = "oi";

//1) DECLARA A FUNCAO E DIZEMEOS O QUE ELA FAZ
//                    //string
function imprimeText (texto){
   console.log(texto);
}

//2) EXECUTAMOS A FUNCAO (1 OU + VEZES)
//imprimeText("oi")
//imprimeText("outro texto")

//segunda forma
function soma(){
    return 2+2;

}
//console.log(soma());

//terceira forma, funcao dentro de funcao
imprimeText(soma());