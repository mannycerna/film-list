import React, { Component } from 'react'



class Form extends Component {
    constructor(props){
    
        super(props);

    this.initialState = {
        title: '',
        actors:  '',
        plot: '',
        genre: '',
        imdbRating: '',
        director: '',
        year: '',
        dateAdded: new Date().toString().substring(3,16),
    };

    this.state = this.initialState
    }

    handleChange = (event) => {
        
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }
    

    onFormSubmit = (event) => {
        event.preventDefault();
        const newDate = new Date().toString().substring(3, 16);
        this.setState({date:newDate.substring(3, 16)});


        this.props.addMovie(this.state);

        // this.initialState.date = newDate();
        // this.setState(this.initialState);
       
      }


    render() {
        const {title, actors, plot, genre, imdbRating, director, year } = this.state

        return (
          
            <form 
                onSubmit={this.onFormSubmit}>
                <label htmlFor="title">Title</label>
                <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange = {this.handleChange} />
                <label htmlFor="actors">Actors</label>
                <input
                type="text"
                name="actors"
                id="actors"
                value={actors}
                onChange = {this.handleChange} />
                <label htmlFor="plot">Plot</label>
                <input
                type="text"
                name="plot"
                id="plot"
                value={plot}
                onChange={this.handleChange} />
                 <label htmlFor="plot">Genre</label>
                <input
                type="text"
                name="genre"
                id="genre"
                value={genre}
                onChange={this.handleChange} />
                 <label htmlFor="imdbRating">imdbRating</label>
                <input
                type="number"
                name="imdbRating"
                id="imdbRating"
                value={imdbRating}
                onChange={this.handleChange} />
                 <label htmlFor="director">Director</label>
                <input
                type="text"
                name="director"
                id="director"
                value={director}
                onChange={this.handleChange} />
                 <label htmlFor="year">Year</label>
                <input
                type="text"
                name="year"
                id="year"
                value={year}
                onChange={this.handleChange} />
                 {/* <label htmlFor="dateAdded">Date Added</label>
                <input
                type="date"
                name="dateAdded"
                id="dateAdded"
                value={dateAdded}
                onChange={this.handleChange} />*/
                <button type="submit">Submit</button> }
            </form>
        ); 
    }   
}




export default Form;