function Pelicula({pelicula}){

return(
<>
<section>
    {pelicula.map(function(pelicula){
        return(
            <div>
                <img src={pelicula.cartel} alt="pelicula"></img>
                <h2>{pelicula.titulo}</h2>
            </div>
        )
    })}
</section>
</>)
}

export default Pelicula;