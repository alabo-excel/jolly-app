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
        movies: null
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

      fetch("https://imdb8.p.rapidapi.com/title/auto-complete?q=endgame", {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-key": "d82821146dmsh0ea8a649aa47896p17a7fbjsn4c87553327e7",
      		"x-rapidapi-host": "imdb8.p.rapidapi.com"
      	}
      })
      .then(response => response.json())
      .then(data => {
        this.setState({movies: data})
      })
    }

  render(){
    console.log(this.state.movies)
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
