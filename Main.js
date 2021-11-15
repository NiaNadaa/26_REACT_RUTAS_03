import Pelicula from "./Pelicula.js"
function Main({peliculas}){
    let pelis = peliculas.map(function(pelicula){
        return(
            <Pelicula pelicula={pelicula}/>
        )
    });
return(
    <>
    <div>{pelis}</div>
    </>
)
}

export default Main;