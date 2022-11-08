// POSICAO DAS LETRAS

// a    b    c    d    e    f    g    h    i    j    k    l    m    n    o    p    q    r    s    t    u    v    w    x    y    z
// 97   98   99   100  101  102  103  104  105  106  107  108  109  110  111  112  113  114  115  116  117  118  119  120  121  122

// A    B    C    D    E    F    G    H    I    J    K    L    M    N    O    P    Q    R    S    T    U    V    W    X    Y    Z
// 65   66   67   68   69   70   71   72   73   74   75   76   77   78   79   80   81   82   83   84   85   86   87   88   89   90

                                                    // ESPACO 32



            //AKI MUDA O FUNDO DA AREA DO TEXTO  **COMECO
function txtarea1() {
    document.getElementById('mensagem').style.boxShadow = '5px 5px 5px red'
    document.getElementById('msg').style.backgroundImage = 'url("imagens/itachi.gif")'//NAO ESQUECER DE MUDAR O CAMINHO DA IMAGEM QUANDO PASSAR PRO JS
}
                //AKI MUDA O FUNDO DA AREA DO TEXTO  **FIM
    
    
    
                //AKI MUDA O FUNDO DA AREA DO TEXTO  **COMECO
function cifra() {
    document.getElementById('mensagem').style.backgroundImage = 'url("imagens/cifra3.gif")'//NAO ESQUECER DE MUDAR O CAMINHO DA IMAGEM QUANDO PASSAR PRO JS
}
    


function base() {
    document.getElementById('mensagem').style.backgroundImage = 'url("imagens/base2.gif")'//NAO ESQUECER DE MUDAR O CAMINHO DA IMAGEM QUANDO PASSAR PRO JS
}
            //AKI MUDA O FUNDO DA AREA DO TEXTO  **FIM
    
    
    
function criptografar() {
    document.getElementById('codigo').style.boxShadow = '5px 5px 5px green'
    //document.getElementById('divcodificacao').innerHTML = '<img src="imagens/trancar.gif" id="imgcodificacao" alt="Codificação">'//NAO ESQUECER DE MUDAR O CAMINHO DA IMAGEM QUANDO PASSAR PRO JS
    
    
    
    var teste = document.getElementById('msg').value.length
    var testePalavrao = document.getElementById('msg').value.replace(' cu','©').replace('cu ','©').replace(' buceta','©').replace(' piroca','©').replace(' puta','©').replace('porra ','©').replace('foda','©').replace(' foder','©').replace('caralho','©').replace('foda-se','©')

    for (var i = 0; i < teste; i++) {
        if (testePalavrao.charAt(i) == '©') {
            document.getElementById('palavrao').innerHTML = 
            `<div id="caixa">
                <p>Peço com gentileza não usar palavrões!</p>
                <img src="imagens/dedo-do-meio.gif" id="dedo">
        
                <input type="button" value="Desculpa!" id="desculpas" onclick="desculpas()">    
            </div>`

            //document.getElementsByTagName('h6').style.color = 'red'       PQ NAO DA PRA ESTILIZAR PELA TAG?
            document.getElementById('aviso').style.color = 'rgba(255, 0, 0, 0.788)'
        }
    }
         
    
    if (document.getElementById('cifra').checked) {
        document.getElementById('codigo').style.backgroundImage = 'url("imagens/narutosasuke.gif")'//NAO ESQUECER DE MUDAR O CAMINHO DA IMAGEM QUANDO PASSAR PRO JS

        var msg = document.getElementById('msg')
        var codigo = document.getElementById('resultado')
        var key = document.getElementById('chave')
        var num = Number(key.value)

        codigo.innerText = ''
        msg = msg.value
    
        for(var i = 0; i < msg.length; i++) {
            if (msg.charCodeAt(i) > 96 && msg.charCodeAt(i) < 123) {
                var NumeroDaLetra = msg.charCodeAt(i) - 97
                var deslocamento = (NumeroDaLetra + num) % 26           
                deslocamento += 97

                codigo.textContent += String.fromCharCode(deslocamento)

            } else if (msg.charCodeAt(i) > 64 && msg.charCodeAt(i) < 91) {
                var NumeroDaLetra = msg.charCodeAt(i) - 65
                var deslocamento = (NumeroDaLetra + num) % 26           
                deslocamento += 65
    
                codigo.textContent += String.fromCharCode(deslocamento)
                
            } else {
                codigo.textContent += m[i]
            }
        }
    } else {
        if (document.getElementById('base').checked) {
            document.getElementById('codigo').style.backgroundImage = 'url("imagens/time7.gif")'//NAO ESQUECER DE MUDAR O CAMINHO DA IMAGEM QUANDO PASSAR PRO JS
            
            document.getElementById('resultado').innerText = btoa(document.getElementById('msg').value)
            
        }
    }
}


    
function descriptografar() {
    document.getElementById('codigo').style.boxShadow = '5px 5px 5px green'

    if (document.getElementById('cifra').checked) {

        var msg = document.getElementById('msg')
        var codigo = document.getElementById('resultado')
        var key = document.getElementById('chave')
        var num = Number(key.value)

        codigo.innerText = ''
        msg = msg.value
    
        for(var i = 0; i < msg.length; i++) {
            if (msg.charCodeAt(i) > 96 && msg.charCodeAt(i) < 123) {
                var NumeroDaLetra = msg.charCodeAt(i) - 97
                var deslocamento = (NumeroDaLetra - num) % 26           
                deslocamento += 97

                codigo.textContent += String.fromCharCode(deslocamento)

            } else if (msg.charCodeAt(i) > 64 && msg.charCodeAt(i) < 91) {
                var NumeroDaLetra = msg.charCodeAt(i) - 65
                var deslocamento = (NumeroDaLetra - num) % 26           
                deslocamento += 65
    
                codigo.textContent += String.fromCharCode(deslocamento)
                
            } else {
                codigo.textContent += msg[i]
            }
        }
    } else {
        if (document.getElementById('base').checked) {
            document.getElementById('resultado').innerText = atob(document.getElementById('msg').value)
        }
    }
}



function desculpas() {
    document.getElementById('palavrao').removeChild(document.getElementById('caixa'))
}





// https://www.youtube.com/watch?v=utiLWBXmNQU      calculo da crifra
// https://www.youtube.com/watch?v=UShV_TFxs_A      replace
// https://www.youtube.com/watch?v=dPl3OTOOJwM      for
// https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g
// http://devfuria.com.br/javascript/dom-remove-child/      removeChild
// https://www.youtube.com/watch?v=rPkMD0OSiKc      parametros
// https://www.youtube.com/watch?v=xa2-3oja8A4      map
// https://www.youtube.com/watch?v=wtMJLBXr0wk      join
// https://www.youtube.com/watch?v=b28xNwHrIuI&t=282s       indexOf
// https://www.youtube.com/watch?v=Sc5zG2KNP0w      btoa() e aotb()



                    //MEUS FAILLS

                        //1
// if (msg = 'a') {
//     msg.innerText = 'aki entra o switch'
//   }
  
// function criptografar() {
//     switch (msg) {
//     case a: 
//         msg.innerText += 'b'
//     // SEM break pra continuar rodando
    
//     case b:
//         msg.innerText += 'c'
    
//     case c:
//         msg.innerText += 'd'
    
//     case d:
//         msg.innerText += 'e'
    
//     case e:
//         msg.innerText += 'f'
    
//     case f:
//         msg.innerText += 'g'
    
//     case g:
//         msg.innerText += 'h'
    
//     case h:
//         msg.innerText += 'i'
    
//     case i:
//         msg.innerText += 'j'
    
//     case j:
//         msg.innerText += 'k'
//   }
//   document.write(msg)
// }



                        //2
// var texto = document.getElementById('texto')


// function criptografar() {
//     alert('texto')
// }

            
// var resultado = document.getElementById('resultado')
// resultado.innerText = `aaa`



                        //3
// function criptografar() {}
// var msg = 'aaaaa'
// switch (msg) {

//     case a:
//         msg = msg.replace(/a/gi,'b')
//     // SEM break pra continuar rodando
//     case b:
//         msg = msg.replace(/b/gi,'c')
    
//     case c:
//         msg = msg.replace(/c/gi,'d')
    
//     case d:
//         msg = msg.replace(/d/gi,'e')
    
//     case e:
//         msg = msg.replace(/e/gi,'f')
    
//     case f:
//         msg = msg.replace(/f/gi,'g')
    
//     case g:
//         msg = msg.replace(/g/gi,'h')
    
//     case h:
//         msg = msg.replace(/h/gi,'i')
    
//     case i:
//         msg = msg.replace(/i/gi,'j')

//     case j:
//         msg = msg.replace(/j/gi,'k')

//     case k:
//         msg = msg.replace(/k/gi,'l')

//     case l:
//         msg = msg.replace(/l/gi,'m')

//     case m:
//         msg = msg.replace(/m/gi,'n')

//     case n:
//         msg = msg.replace(/n/gi,'o')

//     case o:
//         msg = msg.replace(/o/gi,'p')

//     case p:
//         msg = msg.replace(/p/gi,'q')

//     case q:
//         msg = msg.replace(/q/gi,'r')

//     case r:
//         msg = msg.replace(/r/gi,'s')

//     case s:
//         msg = msg.replace(/s/gi,'t')

//     case t:
//         msg = msg.replace(/t/gi,'u')

//     case u:
//         msg = msg.replace(/u/gi,'v')

//     case v:
//         msg = msg.replace(/v/gi,'w')

//     case w:
//         msg = msg.replace(/w/gi,'x')

//     case x:
//         msg = msg.replace(/x/gi,'y')

//     case y:
//         msg = msg.replace(/y/gi,'z')

//     case z:
//         msg = msg.replace(/z/gi,'a')
//   }

// document.log(msg)



























                                    //rascunho


// > var frase = 'abcde'
// undefined
// > var veri = frase[2]
// undefined
// > console.log(veri)
// i


// var frase = 'eu nao aguento mais estudar'
// var lugarDaLetra = frase[3]
// var numero = frase.charCodeAt(3)
// var frasee = 97

// sentence = sentence.value.toUpperCase().replace(/n/g,'x')

// console.log(lugarDaLetra)
// console.log(numero)



// var frasee = 97
// console.log(String.fromCharCode(frasee))



// var frase = "a a a a a a"

// if (frase) {
//     console.log(frase)
// } else {
//     console.log('deu errado')
// }

// console.log(frase.replace(/a a a/g, "z"))





















                                                //CENSURA DA MALDADE

// var frase = ' cu'
// var palavrasCensurada = [' cu', 'cu ', ' buceta', ' piroca', ' puta', 'porra ', 'foda ', ' foder', 'caralho', 'foda-se']
// var testeCensura = [frase.replace(' cu','@'), frase.replace('cu ','@'), frase.replace(' buceta','@'), frase.replace(' piroca','@'), frase.replace(' puta','@'), frase.replace('porra ','@'), frase.replace('foda ','@'), frase.replace(' foder','@'), frase.replace('caralho','@'), frase.replace('foda-se','@')]


// if (testeCensura[0] == '@' || testeCensura[1] == '@' || testeCensura[2] == '@' || testeCensura[3] == '@' || testeCensura[4] == '@' || testeCensura[5] == '@' || testeCensura[6] == '@' || testeCensura[7] == '@' || testeCensura[8] == '@' || testeCensura[9] == '@') {
//     console.log(frase)
// } else {
//     console.log('estude mais')
// }
