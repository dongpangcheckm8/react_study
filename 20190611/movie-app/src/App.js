import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

  state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Maxtrix",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SL1500_.jpg"
          },
          {
            title : "Oldboy",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title : "Star Wars",
            poster : "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SL1500_.jpg"
          },
          {
            title : "Trainspotting",
            poster : "https://dazedimg-dazedgroup.netdna-ssl.com/700/azure/dazed-prod/1160/4/1164398.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
      
    );
  }
}

export default App;
