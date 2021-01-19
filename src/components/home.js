import './styles.css'
import Rating from './rating'

function Home(props) {

  if(props.music == null){
    return(
      <div className="App d-flex justify-content-center pt-5">
        <div className="spinner-grow " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }else{
    const bookList = props.books.splice(0, 3).map(book =>{
        return(
          <div key={book.title} className="card col-lg-3 col-sm-12 mx-lg-5 mt-3">
            <div className="card-body d-flex">
              <img id={book.title} src={book.image} alt={book.id} />
              <div className="pl-3">
                <h6> {book.title}</h6>
                <p>{book.director}</p>
                <p>{book.type}</p>
                <p>{book.year}</p>
                <Rating />
              </div>
              </div>
            </div>
        )
      })

      const musics = props.music.splice(0, 3).map(music =>{
          return(
            <div key={music.title} className="card col-lg-3 col-sm-12 mx-lg-5 mt-3">
              <div className="card-body d-flex">
                <img src={music.image} alt={music.title}/>
                <div className="pl-3">
                  <h6> {music.title}</h6>
                  <p>{music.director}</p>
                  <p>{music.year}</p>
                  <p>{music.genre}</p>
                  <Rating />
                </div>
              </div>
            </div>
          )
        })

        const movies = props.movies.splice(0, 3).map(movie =>{
            return(
                <div key={movie.title} className="card col-lg-3 col-sm-12 mx-lg-5 mt-3">
                  <div className="card-body d-flex">
                    <img src={movie.image} alt={movie.id}/>
                    <div className="pl-3">
                      <h6> {movie.title}</h6>
                      <p>{movie.director}</p>
                      <p>{movie.year}</p>
                      <Rating />
                    </div>
                  </div>
                </div>
            )
          })

    return(
      <div className="App">
        <div className="text-center">
        <hr />
        <p>BOOKS</p>
        </div>
          <div className="row p-4">
            {bookList}
          </div>
          <div className="text-center">
          <hr />
          <p>MUSIC</p>
          </div>
        <div className="row p-4">
          {musics}
        </div>

        <div className="text-center">
        <hr />
        <p>MOVIES</p>
        </div>
      <div className="row p-4">
        {movies}
      </div>
      </div>
    )
  }
}
export default Home;
