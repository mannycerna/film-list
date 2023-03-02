import './App.css';
import Table from './components/Table'
import MovieForm from './components/MovieForm';
import {useState} from 'react';
import Data from './Data';
import DeleteForm from './components/DeleteForm';
import SearchBar from './components/SearchBar';

function App() {


    // we make a hook for movies into the state
    // because we are in a function
    const [movies, setMovies] = useState(Data);


    const addMovie = (movie) => {
        setMovies([
            ...movies,
            movie
        ]);

    }

    const removeMovie = (id) => {
        const filteredMovies = Data.filter((_id, index) => {
            return index !== id
        })
        setMovies(filteredMovies)
    }

    const removeAllMovies = () => {

        setMovies([]);
    }

    const resetSearch = () => {
        setMovies(Data);
    }

    const filterMovies = (searchInput, searchField) => {
        console.log(searchInput, searchField);
        const moviesFiltered = Data.filter((movie) => {
            return movie[searchField].toString().toLowerCase().includes(searchInput.toLowerCase())
        })
        setMovies(moviesFiltered);
    }

    return (

        <div className="App">

            <SearchBar filterMovies={filterMovies}
                resetSearch={resetSearch}/>

            <MovieForm addMovie={addMovie}/>

            <DeleteForm removeAllMovies={removeAllMovies}/>

            <Table movies={movies}
                removeMovie={removeMovie}/>

        </div>
    );
}

export default App;