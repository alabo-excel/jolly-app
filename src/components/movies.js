import './styles.css'
import Rating from "./rating"

function Movies(props) {
  console.log(props.movies)
  if(props.movies == null){
    return(
      <div className="App d-flex justify-content-center pt-5">
        <div className="spinner-grow " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }else{
    const movies = props.movies.map(movie =>{
        return(
            <div key={movie.title} className="card col-lg-3 col-sm-12 mx-lg-5 mt-3">
              <div className="card-body d-flex">
                <img src={movie.image} alt={movie.id}/>
                <div className="pl-3">
                  <h6> {movie.title}</h6>
                  <p>{movie.director}</p>
                  <div className="d-flex justify-content-between">
                  <p>{movie.year}</p>
                  <p>{movie.duration}</p>
                  </div>
                  <p>{movie.genre}</p>
                  <Rating />
                </div>
              </div>
            </div>
        )
      })
    return(
      <div className="App">
        <div className="row p-4">
          {movies}
        </div>
      </div>
    )
  }
}

export default Movies;
