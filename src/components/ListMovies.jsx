
function ListMovies({ movies }) {
  return (
    <>
    <div className="row">
      {movies.map((oneMovie) => (
          <div key={oneMovie.id}>
            <div className="row__posters">
              <img className="row__poster" src={oneMovie.foto}  />
              </div>

              <div className ="title-content">
              <h1 className="title">{oneMovie.titulo}</h1>
              <p className="year">{oneMovie.año}</p>
              </div>

              <div className="details-content">
              
              <p className="genero">Gender: {oneMovie.genero}</p>
              <p className="actors">Actors: {oneMovie.personajes}</p>
              <p className="facturation">Billing: {oneMovie.facturacion} millones</p>
              <p className="sinopsis">Synopsis: {oneMovie.sinopsis}</p>
              </div>
            
          </div>
      ))}
      </div>
    </>
  );
}



export default ListMovies;