const container = document.querySelector(".container");

//fetch("alunos.json")
fetch("http://localhost:3000/alunos")
.then( resp => resp.json())
.then( dados => {
    dados.map( aluno =>{
        /* if(aluno.nome.includes("q")){ */
            container.innerHTML += 
                `
                <div class="card">
                    <img src="${aluno.foto}" alt="">
                    <h2> ${aluno.nome} </h2>
                    <div> Turma: ${aluno.turma}</div>
                    <div> CR: ${aluno.cr}</div>
                </div>
                `
            }
        /* } */
     ) })
.catch( erro => console.log(erro))