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
            if ( http.status === 200){
                var resposta = JSON.parse( http.responseText)
                console.log("Fizemos uma requisição nesta url: " + url + " para que o Heroku fizesse o deploy. Resposta: [ " + http.responseText + " ]");
            } else{
                console.log("Fizemos uma requisição nesta url: " + url + " , para que o Heroku despertasse a aplicação, mas falhou." );
            }
        }
    }
    
}
const urlProduto = 'https://curso-spring-ejs.herokuapp.com/produtos/1';
const urlProdutoCategoria = 'https://curso-spring-ejs.herokuapp.com/produtos/nome-categorias?categoriasId=1';
const urlCategorias = 'https://curso-spring-ejs.herokuapp.com/categorias/page?size=3';
const urlEstados = 'https://curso-spring-ejs.herokuapp.com/estados';

// ALGA-FOOD
const urlCidades = 'https://ejs-algafood.herokuapp.com/cidades';
const urlCozinhas = 'https://ejs-algafood.herokuapp.com/cozinhas?page=0&size=10';
const urlFormasPagamento = 'https://ejs-algafood.herokuapp.com/forma-pagamentos';
const urlRestaurantes = 'https://ejs-algafood.herokuapp.com/restaurantes';

function quemChamar(tipo){
    switch (tipo) {
        case 'produto':
            buscarObjeto(urlProduto, tipo)
            break;
        case 'produto-categoria':
            buscarObjeto(urlProdutoCategoria, tipo)
            break;
        case 'categorias':
            buscarObjeto(urlCategorias, tipo)
            break;
        case 'estados':
            buscarObjeto(urlEstados, tipo)
            break;
        case 'cidades':
            buscarObjeto(urlCidades, tipo)
            break
        case 'cozinhas':
            buscarObjeto(urlCozinhas, tipo)
            break;
        case 'formas-pagamento':
            buscarObjeto(urlFormasPagamento, tipo)
            break;
        case 'restaurantes':
            buscarObjeto(urlRestaurantes, tipo)
            break
        default:
            break;
    }
}

function buscarObjeto(url,tipo){
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
            if ( http.status === 200){
               let retorno = JSON.parse(http.responseText)
                preparaHTML(retorno, tipo)
            } else{
                retorno = "Falhou";
            }
        }
    }
}

function preparaHTML(resposta, tipo){
    switch (tipo) {
        case 'produto':
            document.getElementById('api1').innerHTML = "";
            // cria um novo elemento div
            // e dá à ele conteúdo
            var divNova = document.createElement("div");
            var conteudoDiv = document.createTextNode('Nome: ' + resposta.nome + 
             '; Preço: ' + resposta.preco)
            divNova.appendChild(conteudoDiv)
            document.getElementById('api1').appendChild(divNova);
            break;
        case 'produto-categoria':
            const conteudo = resposta.content;
            document.getElementById('api1').innerHTML = ""
            var divNova = document.createElement("div");
            var contador = 4;
            for ( const item of conteudo){
                var conteudoDiv = document.createTextNode('Nome: ' + item.nome +
                    '; Preço: ' + item.preco + " ")
                divNova.appendChild(conteudoDiv)
                contador++
                if ( (contador % 4) == 0){
                    var pulaLinha = document.createElement('br');
                    divNova.appendChild(pulaLinha)
                }
            }
            document.getElementById('api1').appendChild(divNova)
            break;
        case 'categorias':
            document.getElementById('api1').innerHTML = ""
            var divNova = document.createElement("div");
            for ( const item of resposta.content){
                var conteudoDiv = document.createTextNode('Nome: ' + item.nome + '; ' )
                divNova.appendChild(conteudoDiv)
            }
            document.getElementById('api1').appendChild(divNova)
            break;
        case 'estados':
            document.getElementById('api1').innerHTML = ""
            var divNova = document.createElement("div");
            for ( const item of resposta){
                var conteudoDiv = document.createTextNode('Nome: ' + item.nome + '; ' )
                divNova.appendChild(conteudoDiv)
            }
            document.getElementById('api1').appendChild(divNova)
            break;
        case 'cidades':
            document.getElementById('api2').innerHTML = ""
            var divNovaAlga = document.createElement('div');
            for ( const item of resposta){
                var conteudoDiv = document.createTextNode('Nome: ' + item.nome + '; ' 
                + 'Estado: ' + item.estado.nome)
                divNovaAlga.appendChild(conteudoDiv)
            }
            document.getElementById('api2').appendChild(divNovaAlga)
            break;
        case 'cozinhas':
            document.getElementById('api2').innerHTML = ""
            var divNovaAlga = document.createElement('div');
            contador = 0;
            for ( const item of resposta.content){
                var conteudoDiv = document.createTextNode('Nome: ' + item.nome + '; ')
                divNovaAlga.appendChild(conteudoDiv);
                contador++
                if ( (contador % 6) == 0){
                    var pulaLinha = document.createElement('br');
                    divNovaAlga.appendChild(pulaLinha)
                }
            }
            document.getElementById('api2').appendChild(divNovaAlga)
            break;
        case 'formas-pagamento':
            document.getElementById('api2').innerHTML = "";
            var divNovaAlga = document.createElement('div');
            for ( const item of resposta){
                var conteudoDiv = document.createTextNode('Descrição: ' + item.descricao + '; ')
                divNovaAlga.appendChild(conteudoDiv);
            }
            document.getElementById('api2').appendChild(divNovaAlga)
            break;
            case 'restaurantes':
            document.getElementById('api2').innerHTML = "";
            var divNovaAlga = document.createElement('div');
            var divEndereco = document.createElement('div');
            for ( const item of resposta){
                let entregando = 'Não';
                if ( item.aberto){
                    entregando = 'Sim'
                }
                var conteudoDiv = document.createTextNode('Restaurante: ' + item.nome + '; ' +
                'Entregando: ' + entregando + '; Taxa de frete: ' + item.taxaFrete + '; ')
                var endereco = document.createTextNode('Endereço: Logradouro:' + item.endereco.logradouro + ', Bairro: '
                + item.endereco.bairro + ', Nº ' + item.endereco.numero + ', CEP:' + item.endereco.cep +
                ', ' + item.endereco.cidade.nome + ', ' + item.endereco.cidade.estado.nome + '.' )
                divEndereco.appendChild(endereco);
                divNovaAlga.appendChild(conteudoDiv)
                divNovaAlga.appendChild(document.createElement('br'));
                divNovaAlga.appendChild(divEndereco);
                divNovaAlga.appendChild(document.createElement('br'));
            }
            document.getElementById('api2').appendChild(divNovaAlga);
            break;
        default:
            break;
    }

}