import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Books from './components/books'
import Movies from './components/movies'
import Music from './components/music'
import Home from './components/home'
import Header from './components/header'
import movies from './data/movies.json'
import books from './data/books.json'
import music from './data/music.json'

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        music: music,
        books: books,
        movies: movies
      }
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
