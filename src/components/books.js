import './styles.css'
import Rating from './rating'

function Books(props) {
  if(props.books == null){
    return(
      <div className="App d-flex justify-content-center pt-5">
        <div className="spinner-grow " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }else{
    const bookList = props.books.map(book =>{
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

    return(
      <div className="App">
        <div className="row p-4">
          {bookList}
        </div>
      </div>
    )
  }
}

export default Books;
