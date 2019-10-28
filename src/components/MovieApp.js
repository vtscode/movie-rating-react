import React, {Component} from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'

const inception = {
  id: 'inception',
  title: 'Inceptionnnn',
  rating: 5,
  image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
  year: 2010}

const shawshank = {
    id: 'shawshank',
    title: 'Shawshank Redeption',
    year: 1994,
    rating: 5
}

const whatever = {id: 'whatever', title: 'Whatever', rating: 2, year: 1900}

const moviesToDisplay = [whatever, inception, shawshank]

class MovieApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      movies: moviesToDisplay,
      titleFilter: ''
    }
  }
  
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase().trim()
        )
      )
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter
              })
            }} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </header>
        <main className="movie-app-main">
            <MovieList
              movies={
                this.getVisibleMovies()
              }
              onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />
        </main>
      </div>
    )
  }
}

export default MovieApp;
