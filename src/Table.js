import React, { Component } from 'react'



const TableHeader = () => {
    return (
      <thead>
      <><br/></>
        <tr>
          <th>Title</th>
          <th>Actors</th>
          <th>Plot</th>
          <th>Genre</th>
          <th>IMDB</th>
          <th>Director</th>
          <th>Year</th>
          <th>Date Added</th>
        </tr> <><br/> </>
      </thead>
    )
  }
  const TableBody = (props) => {
    const rows = props.movieData.map((row, index) => {
      return (
      <tr key={index}>
        <td>{row.title} </td>
        <> <br></br> </>
        <td>{row.actors}</td>
        <td>{row.plot}</td>
        <td>{row.genre}</td>
        <td>{row.imdbRating}</td>
        <td>{row.director}</td>
        <td>{row.year}</td>
        <td>{row.dateAdded}</td>
        <td>
          <br/><button onClick={() => props.removeMovie(index)}>Delete</button>
        </td>
      </tr>
      )
    })
    return <tbody>{rows}</tbody>
    
  }


  class Table extends Component {
    render() {
    const { movieData, 
            removeMovie, 
          } = this.props;
    
  
    return (
      <table>
        <TableHeader />
        <TableBody movieData={movieData} removeMovie={removeMovie} />
      </table>
      )
    }
  }



export default Table
