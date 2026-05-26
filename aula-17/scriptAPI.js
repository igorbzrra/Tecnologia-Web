fetch("https://viacep.com.br/ws/48605250/json",GET)
.then( response => response.json())
.then( dados => {
    const qualquer = document.querySelector(".container")
    qualquer.innerHTML += dados.localidade
})
.catch( error => console.log(error))

/*
    0. npm -version
    1. npm install json-server
    2. npx json-server alunos.json

    CRUD -> RestAPI
    Listar      - GET       \alunos -> JSON
    Inserir     - POST      \alunos -> BODY: json
    Localizar   - GET       \alunos\{id}
    Editar      - PUT       \alunos\{id}
    Remover     - DELETE    \alunos\{id}

    1. Realizar fetch (localhost:3000/alunos)
    2. Converter para JSON
    3. Percorrer o array (JSON)
    4. Para cada item, criar um card com os dados
*/