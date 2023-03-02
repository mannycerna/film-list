import React, {useState} from 'react';
// import Table from './Table';

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchField, setSearchField] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.filterMovies(searchInput, searchField);
    }

    const handleReset = () => {
        props.resetSearch();
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="search">
                    Search</label>
                <input type="text" name="search" id="search" placeholder="Search here"
                    value={searchInput}
                    onChange={
                        e => setSearchInput(e.target.value)
                    }/><br/>
                <label htmlFor="title">Title</label>
                <input type="radio" id="title" name='title' value="title"
                    onChange={
                        e => setSearchField(e.target.value)
                    }
                    checked={
                        searchField === 'title'
                    }/>
                <label htmlFor="actors">Actor</label>
                <input type="radio" id="actors" name="actors" value="actors"
                    onChange={
                        e => setSearchField(e.target.value)
                    }
                    checked={
                        searchField === 'actors'
                    }/>
                <button type="submit">
                    Search
                </button>

            </form>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}

export default SearchBar;
