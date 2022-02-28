import { useState} from "react";
import "../css/search.css";
import Movie from "./Movie";

// const FEATURED_API =
//   "https://api.themoviedb.org/3/discover/movie?api_key=63da3278ddb6c0a829bb2d4a2c1d118a&page=1&language=tr";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=63da3278ddb6c0a829bb2d4a2c1d118a&query=";

function Search() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // useEffect(() => {
  //   fetch(FEATURED_API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.results);
  //     });
  // }, []);

  function handleOnSubmit (e) {
      e.preventDefault();
      fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
      setSearchTerm("")
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="movie-container">
      <header>
        <form onSubmit={handleOnSubmit} className="search-form">
          <input 
          type="text" 
          placeholder="Seach..." 
          className="search"
          value={searchTerm}
          onChange={handleOnChange} />
           <button type="submit" className="search-btn">Search
          </button>
        </form>
      </header>
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default Search;
