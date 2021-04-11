function acoesPagina (){

    function typeWriter(textoDoElementoHTML, idDoHtml){
        let vetor = textoDoElementoHTML.split('');
        const elemento = document.querySelector('#'+ idDoHtml)
        elemento.innerHTML = '';
        vetor.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 100 * (i + 1));
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
    });
    
    let hoje = new Date();
    let ano = hoje.getFullYear();
    document.getElementById('ano').value += ano;

    function addClass( i ){
        document.getElementById(i).className='ativo'
    }

    function itemSelecionado(){
        window.onload(addClass(0));
    }
    itemSelecionado();
}

function mostraCertificado(){
    if ( document.getElementById('cert_curso_spring').hidden == true){
        document.getElementById('cert_curso_spring').hidden = false;
        document.getElementById('esconder_Certificado').hidden = false;
        document.getElementById('mostrar_Certificado').hidden = true;
    }
    else{
        document.getElementById('cert_curso_spring').hidden = true;
        document.getElementById('esconder_Certificado').hidden = true;
        document.getElementById('mostrar_Certificado').hidden = false;
    }
}