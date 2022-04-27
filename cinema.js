var catalogo = require ("./database/catalogo.json")
var catalogoString = JSON.stringify(catalogo) //Stringfy converte um objeto em string no JS, as pessoa susam para simplificar, tirar todos os "enters" e deixando numa linha só.

var catalogoObj = JSON.parse(catalogoString) //Faz o contrário, devolve o formato para objeto normal.

function listarTodosOsFilmes(filmes){
    for(let i=0; i<filmes.lenght; i++){
        console.log(filmes[i].titulo)
    }
}
listarTodosOsFilmes(catalogo.data);


function listarFilmesEmCartaz(filmes) {
    return filmes.filter((filme) => filme.emCartaz);
  }
  console.log(listarFilmesEmCartaz(catalogoObj.data));

  
//OU ARROW FUNCTION:
//const listarFilmesEmCartaz = (filmes) => filmes.filter((filme) => filme.emCartaz);

