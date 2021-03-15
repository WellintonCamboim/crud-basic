// IMPORTA A FUNÇÃO INIT E A APELIDA DE INITDATABASE DO ARQUIVO `DATABASE.TS`, 
// NOTE QUE A EXTENSÃO `.TS` É OMITIDA AQUI.
import { init as initDatabase } from "./database";

// *
import express from "express";

// *
import bodyParser from "body-parser";

// *
const app = express();

// *
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// *
app.use(bodyParser.json());

// CRIA UMA FUNÇÃO ASSÍNCRONA CHAMADA INIT() (NÃO CONFUNDIR COM A INIT DO 
// ARQUIVO DATABASE.TS) ESTA FUNÇÃO FOI CRIADA PARA QUE POSSAMOS MANIPULAR 
// EXECUÇÕES ASSÍNCRONAS UTILIZANDO AS PALAVRAS RESERVADAS ASYNC E AWAIT 
// FACILITANDO O ENTENDIMENTO DO CÓDIGO.
async function init() {
    // AGUARDA A EXECUÇÃO DA FUNÇÃO `INIT()` DO ARQUIVO `DATABASE.TS` E ARMAZENA 
    // O RETORNO DA FUNÇÃO NA CONSTANTE `DB`.
    const db = await initDatabase();

    // **
    app.get('/pessoa', function (request, response) {
        const responseData = {
            teste: "buscar dados de todas as pessoas pessoas"
        };
        response.json(responseData);
    });

    // **
    app.post('/pessoa', function (request, response) {
        const responseData = {
            teste: "adicionar dados de pessoa no banco de dados",
            vindoDoCliente: request.body
        };
        response.json(responseData);
    });

    // **
    app.get('/pessoa/:id', function (request, response) {
        const responseData = {
            id: request.params.id,
            teste: "buscar dados de uma pessoa específica"
        };
        response.json(responseData);
    });

    // **
    app.put('/pessoa/:id', function (request, response) {
        const responseData = {
            id: request.params.id,
            teste: "atualiza dados de uma pessoa específica",
            vindoDoCliente: request.body
        };
        response.json(responseData);
    });

    // **
    app.delete('/pessoa/:id', function (request, response) {
        const responseData = {
            id: request.params.id,
            teste: "exclui dados de uma pessoa específica",
        };
        response.json(responseData);
    });

    // **
    app.listen(8081, () => console.log("running..."));
}

// EXECUTA A FUNÇÃO INIT() DESTE ARQUIVO.
init();