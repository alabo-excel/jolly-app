import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Books from './components/books'
import Movies from './components/movies'
import Music from './components/music'
import Home from './components/home'
import Header from './components/header'

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        music: null,
        books: null,
        movies: [
          {
      "title": "The Shawshank Redemption",
      "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    },
    {
      "title": "The Godfather: Part II",
      "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR106,0,630,1200_AL_.jpg",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9
    },
    {
      "title": "The Dark Knight",
      "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      "year": 2008,
      "director": "Christopher Nolan",
      "duration": "2h 32min",
      "genre": [
        "Action",
        "Crime",
        "Drama",
        "Thriller"
      ],
      "rate": 9
    },
    {
      "title": "12 Angry Men",
      "image": "https://m.media-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_.jpg",
      "year": 1957,
      "director": "Sidney Lumet",
      "duration": "1h 36min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 8.9
    },
    {
      "title": "Schindler\"s List",
      "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      "year": 1993,
      "director": "Steven Spielberg",
      "duration": "3h 15min",
      "genre": [
        "Biography",
        "Drama",
        "History"
      ],
      "rate": 8.9
    },
    {
     "title": "Goodfellas",
     "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
     "year": 1990,
     "director": "Martin Scorsese",
     "duration": "2h 26min",
     "genre": [
       "Crime",
       "Drama"
     ],
     "rate": 8.7
   },
   {
     "title": "The Matrix",
     "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
     "year": 1999,
     "director": "Lana Wachowski",
     "duration": "2h 16min",
     "genre": [
       "Action",
       "Sci-Fi"
     ],
     "rate": 8.7
   },
   {
     "title": "Shichinin no samurai",
     "image": "https://c8.alamy.com/comp/P4JD8T/original-film-title-shichinin-no-samurai-english-title-seven-samurai-the-film-director-akira-kurosawa-year-1954-credit-toho-album-P4JD8T.jpg",
     "year": 1954,
     "director": "Akira Kurosawa",
     "duration": "3h 27min",
     "genre": [
       "Adventure",
       "Drama"
     ],
     "rate": 8.7
   }
        ]
      }
    }
    componentDidMount(){
      fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-NG", {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-key": "d82821146dmsh0ea8a649aa47896p17a7fbjsn4c87553327e7",
      		"x-rapidapi-host": "shazam.p.rapidapi.com"
      	}
      })
      .then(response => response.json())
      .then(data => {
        this.setState({music: data})
      })
      .catch(err => {
      	console.error(err);
      });


      fetch("https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc", {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-key": "d82821146dmsh0ea8a649aa47896p17a7fbjsn4c87553327e7",
      		"x-rapidapi-host": "google-books.p.rapidapi.com"
      	}
      })
      .then(response => response.json())
      .then(data => {
        this.setState({books: data.items})
      })
      .catch(err => {
        console.error(err);
      });
    }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <header>
        <Header />
      </header>
          <Switch>
               <Route exact path="/">
                 <Home books={this.state.books} music={this.state.music} movies={this.state.movies}/>
               </Route>
               <Route path="/music">
                 <Music music={this.state.music} />
               </Route>
               <Route path="/movies">
                 <Movies movies={this.state.movies} />
               </Route>

               <Route path="/books">
                 <Books books={this.state.books} />
               </Route>
            </Switch>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
