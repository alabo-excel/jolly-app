import './styles.css'


function Movies(props) {
  if(props.movies == null){
    return(
      <div className="App d-flex justify-content-center pt-5">
        <div className="spinner-grow " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }else{
    const movies = props.movies.d.map(movie =>{
        return(
          {
            // <div key={movie.key} className="card col-lg-3 col-sm-12 mx-lg-5 mt-3">
            //   <div className="card-body d-flex">
            //     <img src={movie.images.coverart} alt={movie.type}/>
            //     <div className="pl-3">
            //       <h5> {movie.title}</h5>
            //     </div>
            //   </div>
            // </div>
          }
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
