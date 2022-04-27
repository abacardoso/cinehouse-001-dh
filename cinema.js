var catalogo = require ("./database/catalogo.json")
var catalogoString = JSON.stringify(catalogo) //Stringfy converte um objeto em string no JS, as pessoa susam para simplificar, tirar todos os "enters" e deixando numa linha só.

var catalogoObj = JSON.parse(catalogoString) //Faz o contrário, devolve o formato para objeto normal.

//LISTARTODOSOSFILMES:
function listarTodosOsFilmes(filmes){
    for(let i=0; i<filmes.lenght; i++){
        console.log(filmes[i].titulo)
    }
}
listarTodosOsFilmes(catalogo.data);


//LISTARFILMESEMCARTAZ:
//Forma mais refatorada de fazer a função:
function listarFilmesEmCartaz(filmes) {
    return filmes.filter((filme) => filme.emCartaz);
  }
console.log(listarFilmesEmCartaz(catalogoObj.data));

//Com arrow function:
//const listarFilmesEmCartaz = (filmes) => filmes.filter((filme) => filme.emCartaz);


//ALTERARSTATUSEMCARTAZ:
function alterarStatusEmCartaz (id, filmes) {
    const idxFilme = filmes.findIndex ((filme) => {
        if (filme.codigo === id) {
            return true;
        }
    });
    if (idxFilme >= 0) {
        filmes[idxFilme].emCartaz = !filme[idxFilme].emCartaz;
    } else {
        return false; //o else aqui funciona apenas para debugar, ter certeza que o código não vair dar erro
    }
}

//Forma mais refatorada de fazer a função:
function alterarStatusEmCartaz (id, filmes) {
    const idxFilme = filmes.findIndex ((filmes) => filme.codigo === id);
    if (idxFilme >= 0) {
        filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz
    }
}