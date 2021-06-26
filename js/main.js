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
    window.onload(requisicoes());
}

function requisicoes(){
    alert("tste")
}

function mostraCertificado(mostraCertificado, escondeBotaoMostra, mostraBotaoEsconde){   
    document.getElementById(mostraCertificado).hidden = false;
    document.getElementById(escondeBotaoMostra).hidden = true;
    document.getElementById(mostraBotaoEsconde).hidden = false;
}

function esconderCertificado(esconderCertificado, mostraBotaoMostra, escondeBotaoEsconde){
        document.getElementById(esconderCertificado).hidden = true;
        document.getElementById(escondeBotaoEsconde).hidden = true;
        document.getElementById(mostraBotaoMostra).hidden = false;
}

function makeRequisicao(url){

    var http = new XMLHttpRequest();
    http.onreadystatechange = alertContents;
    http.open('GET', url);
    http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.setRequestHeader('Accept', '*/*');
    http.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    http.setRequestHeader('Content-type', 'text/html')

    http.send(null);   

    function alertContents(){
        if ( http.readyState === 4){
            console.log(http.status + http.getAllResponseHeaders())
            if ( http.status === 200){
                alert("Fizemos uma requisição nesta url: " + url + " para que o Heroku fizesse o deploy. Resposta: [ " + http.responseText + " ]");
            } else{
                alert("Fizemos uma requisição nesta url: " + url + " , para que o Heroku despertasse a aplicação, mas falhou." );
            }
        }
    }
    
}