function acoesPagina (){
   let cursosRealizados = document.querySelectorAll('[ej-label]').length;
    for (let i = 1; i <= cursosRealizados; i++) {
        document.getElementById("curso-"+i).textContent=(i)+"/"+cursosRealizados
    }
    const textPage = document.getElementById('atual').textContent
    document.getElementById('atual').textContent = textPage + atual();

    function typeWriter(textoDoElementoHTML, idDoHtml){
        let vetor = textoDoElementoHTML.split('');
        const elemento = document.querySelector('#'+ idDoHtml)
        elemento.innerHTML = '';
        vetor.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 90 * (i + 1));
        }); 
    }

    const p = new Promise( ( resolve, reject) =>{
        const nome = document.querySelector('#ejs')
        const curso = document.querySelector('#sisInfo')
        const el = curso.innerHTML
        curso.innerHTML = ''
        typeWriter(nome.innerHTML, 'ejs');
        resolve(el)
    });

    p.then( ( resultado) => {
        setTimeout(() => {
            typeWriter(resultado, 'sisInfo')  
        }, 1900);
    })
 
}

function mostrarHtml(mostraCertificado, escondeBotaoMostra, mostraBotaoEsconde){   
    document.getElementById(mostraCertificado).hidden = false;
    document.getElementById(escondeBotaoMostra).hidden = true;
    document.getElementById(mostraBotaoEsconde).hidden = false;
}

function esconderHtml(esconderCertificado, mostraBotaoMostra, escondeBotaoEsconde){
        document.getElementById(esconderCertificado).hidden = true;
        document.getElementById(escondeBotaoEsconde).hidden = true;
        document.getElementById(mostraBotaoMostra).hidden = false;
}

function atual(){
    const dia = new Date();
    let atual = new String('tex')
    atual = String(dia.getDate()).padStart(2, '0');
    atual += '/' + String(dia.getMonth()).padStart(2, '0');
    atual += '/' + dia.getFullYear();
    return atual
}



