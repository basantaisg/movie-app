import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// API key obtained from omdbapi
const API_URL = 'http://www.omdbapi.com?apikey=14f765';

// creating movie shit

// Starting the code... with MAin!!!
const App = () => {
  // Creating states with useState
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  //   Creating a fn to search movie async

  // Remember

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  // To fetch the data from api instantly after site loads we are using useEffect

  useEffect(() => {
    searchMovies('Queen of Hearts');
  }, []);

  return (
    <div className='app'>
      <h1>MovieHub</h1>
      <div className='search'>
        <input
          type='text'
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

// API = 14f765

export default App;
