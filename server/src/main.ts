
// IMPORTA A BIBLIOTECA EXPRESS PARA CONTROLE DE REQUISEÇÃO HTTP.
import express from "express";

// IMPORTA A BIBLIOTECA BODY-PARSER PARA FACILITAR A LEITURA DO CORPO HTTP DA 
// REQUISIÇÃO RECEBIDA PELO CLIENTE.
import bodyParser from "body-parser";

// CRIA OBJETO QUE IRÁ CONTROLAR AS REQUISIÇÕES HTTP DA APLICAÇÃO.
const app = express();

// ADICIONA AO CABEÇALHO DE TODAS AS RESPOSTAS DAS REQUISIÇÕES HTTP, AS INFORMAÇÕES 
// QUE PERMITEM O ACESSO POR QUALQUER ORIGEM AOS MÉTODOS [GET,PUT,POST,DELETE].

// adiciona função a ser executada antes de qualquer requisição HTTP.
app.use(
    // função que será executada antes da função de qualquer função definida 
    // para a `rota` e `método HTTP` que atualmente esta sendo requisitada.
    function (request, response, next) {
        // define no cabeçalho de resposta que as requisições podem ser feitas 
        // a partir de qualquer domínio (*).
        response.header('Access-Control-Allow-Origin', '*');
        // define no cabeçalho de resposta que os métodos GET, PUT, POST, DELETE
        // são permitidos.
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        // define no cabeçalho de resposta que é permitido a chave Content-Type 
        // no cabeçalho de requisição.
        response.header('Access-Control-Allow-Headers', 'Content-Type');
        // segue o fluxo para execução.
        next();
    }
);

// INICIA A TRADUÇÃO DO CORPO HTTP RECEBIDO PELO CLIENTE EM QUAISQUER UMA DAS 
// REQUISIÇÕES.

// adiciona função de `tratamento` do corpo da requisição HTTP recebida para que 
// seja executada antes de qualquer função definida para a `rota` e `método 
// HTTP` atual.
app.use(bodyParser.json());

// RESPONDE SOLICITAÇÃO DO CLIENTE: LISTAGEM DE DADOS DE TODAS AS PESSOAS.

// espera requisições `GET` na rota `/pessoa`
app.get('/pessoa',
    // Função que o servidor executará quando receber a requisição nesta rota: 
    // - o parâmetro `request` é um objeto que nos ajuda a entender os dados 
    //   contidos nas requisições HTTP
    // - o parâmetro `response`  é um objeto que nos ajuda a responder as 
    //   requisições HTTP
    function (request, response) {
        // cria o objeto que utilizaremos para responder a requisição HTTP, 
        // enviaremos os dados contidos neste objeto no corpo da resposta HTTP 
        // para que seja possível verifica se o servidor está recebendo as 
        // requisições corretamente, bem como se está respondendo corretamente.
        const responseData = {
            // adiciona a chave `teste` ao objeto para verificar se o servidor 
            // consegue responder corretamente as esta requisição.
            teste: "buscar dados de todas as pessoas pessoas"
        };
        // responde para o cliente em formato JSON o objeto criado anteriormente.
        response.json(responseData);
    }
);

//
// RESPONDE SOLICITAÇÃO DO CIENTE: INSERÇÃO DE NOVA PESSOA.
//

// espera requisições `POST` na rota `/pessoa`.
app.post('/pessoa',
    // Função que o servidor executará quando receber a requisição nesta rota: 
    // - o parâmetro `request` é um objeto que nos ajuda a entender os dados 
    //   contidos nas requisições HTTP
    // - o parâmetro `response`  é um objeto que nos ajuda a responder as 
    //   requisições HTTP
    function (request, response) {
        // cria o objeto que utilizaremos para responder a requisição HTTP, 
        // enviaremos os dados contidos neste objeto no corpo da resposta HTTP 
        // para que seja possível verifica se o servidor está recebendo as 
        // requisições corretamente, bem como se está respondendo corretamente.
        const responseData = {
            // adiciona a chave `teste` ao objeto para verificar se o servidor 
            // consegue responder corretamente as esta requisição.
            teste: "adicionar dados de pessoa no banco de dados",
            // adiciona a chave `vindoDoCliente` ao objeto para que o servidor 
            // responda o que recebeu no corpo da requisição HTTP, para que 
            // assim seja possível verificar-mos se o servidor está recebendo os 
            // dados corretamente.
            vindoDoCliente: request.body
        };
        // responde para o cliente em formato JSON o objeto criado anteriormente.
        response.json(responseData);
    }
);

//
// RESPONDE SOLICITAÇÃO DO CIENTE: LISTAGEN DE DADOS DE UMA PESSOA ESPECÍFICA.
//

// espera requisições `GET` na rota `/pessoa/:id`.
app.get('/pessoa/:id',
    // Função que o servidor executará quando receber a requisição nesta rota: 
    // - o parâmetro `request` é um objeto que nos ajuda a entender os dados 
    //   contidos nas requisições HTTP
    // - o parâmetro `response`  é um objeto que nos ajuda a responder as 
    //   requisições HTTP
    function (request, response) {
        // cria o objeto que utilizaremos para responder a requisição HTTP, 
        // enviaremos os dados contidos neste objeto no corpo da resposta HTTP 
        // para que seja possível verifica se o servidor está recebendo as 
        // requisições corretamente, bem como se está respondendo corretamente.
        const responseData = {
            // adiciona a chave id ao objeto para que seja possível verifica se 
            // o servidor está recebendo corretamente a chave `:id` pela rota 
            // atual.
            id: request.params.id,
            // adiciona a chave `teste` ao objeto para verificar se o 
            // servidor consegue responder corretamente as esta requisição.
            teste: "buscar dados de uma pessoa específica"
        };
        // responde para o cliente em formato JSONo objeto criado anteriormente.
        response.json(responseData);
    }
);

//
// RESPONDE SOLICITAÇÃO DO CIENTE: ALTERAÇÂO DE DADOS DE UMA PESSOA ESPECÍFICA.
//

// espera requisições `PUT` na rota `/pessoa/:id`.
app.put('/pessoa/:id',
    // Função que o servidor executará quando receber a requisição nesta rota: 
    // - o parâmetro `request` é um objeto que nos ajuda a entender os dados 
    //   contidos nas requisições HTTP
    // - o parâmetro `response`  é um objeto que nos ajuda a responder as 
    //   requisições HTTP
    function (request, response) {
        // cria o objeto que utilizaremos para responder a requisição HTTP, 
        // enviaremos os dados contidos neste objeto no corpo da resposta HTTP 
        // para que seja possível verifica se o servidor está recebendo as 
        // requisições corretamente, bem como se está respondendo corretamente.
        const responseData = {
            // adiciona a chave id ao objeto para que seja possível verifica se 
            // o servidor está recebendo corretamente a chave `:id` pela rota 
            // atual.
            id: request.params.id,
            // adiciona a chave `teste` ao objeto para verificar se o servidor 
            // consegue responder corretamente as esta requisição.
            teste: "atualiza dados de uma pessoa específica",
            // adiciona a chave `vindoDoCliente` ao objeto para que o servidor 
            // responda o que recebeu no corpo da requisição HTTP, para que 
            // assim seja possível verificar-mos se o servidor está recebendo os 
            // dados corretamente.
            vindoDoCliente: request.body
        };
        // responde para o cliente em formato JSON o objeto criado anteriormente.
        response.json(responseData);
    }
);

//
// RESPONDE SOLICITAÇÃO DO CLIENTE: EXCLUISÃO DE DADOS DE UMA PESSOA ESPECÍFICA.
//

// espera requisições `DELETE` na rota `/pessoa/:id`.
app.delete('/pessoa/:id',
    // Função que o servidor executará quando receber a requisição nesta rota: 
    // - o parâmetro `request` é um objeto que nos ajuda a entender os dados 
    //   contidos nas requisições HTTP
    // - o parâmetro `response`  é um objeto que nos ajuda a responder as 
    //   requisições HTTP
    function (request, response) {
        // cria o objeto que utilizaremos para responder a requisição HTTP, 
        // enviaremos os dados contidos neste objeto no corpo da resposta HTTP 
        // para que seja possível verifica se o servidor está recebendo as 
        // requisições corretamente, bem como se está respondendo corretamente.
        const responseData = {
            // adiciona a chave id ao objeto para que seja possível verifica se 
            // o servidor está recebendo corretamente a chave `:id` pela rota 
            // atual.
            id: request.params.id,
            // adiciona a chave `teste` ao objeto para verificar se o servidor 
            // consegue responder corretamente as esta requisição.
            teste: "exclui dados de uma pessoa específica",
        };
        // responde para o cliente em formato JSON o objeto criado anteriormente.
        response.json(responseData);
    }
);

//
// INICIA ESPERA DE REQUISIÇÃO NA PORTA 8081 E IMPRIME A MENSAGEM `running...` 
// NO TERMINAL.
//

app.listen(8081, () => console.log("running..."));