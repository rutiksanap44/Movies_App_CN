import React from 'react';
import Navbar from './Navbar';
import MovieCard from './Moviecard';
import { data } from '../data';

class App extends React.Component {
  componentDidMount(){
    const { store } = this.props;

    store.subscribe(() => {
      console.log('Updated')
    })
  //   // make an api call
  //   //dispatch function
    store.dispatch({
      type: "ADD_MOVIES",
      movies : data
    })

    console.log('State : ',this.props.store.getState())
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
