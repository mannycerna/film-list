import React, { Component } from 'react'



const TableHeader = () => {
    return (
      <thead>
      <><br/></>
        <tr>
          <th   align="center"
                colSpan={1}
                rowSpan={2}
                bgcolor="yellow">Title
          </th>
          <th align="center"
              colSpan={1}
              rowSpan={2}
              bgcolor="yellow">Actors
          </th>
          <th  align="center"
                colSpan={1}
                rowSpan={2}
                bgcolor="yellow">Plot
          </th>
          <th align="center"
                colSpan={1}
                rowSpan={2}
                bgcolor="yellow">Genre
          </th>
          <th align="center"
                colSpan={1}
                rowSpan={2}
                bgcolor="yellow">IMDB
          </th>
          <th align="center"
                colSpan={1}
                rowSpan={2}
                bgcolor="yellow">Director
          </th>
          <th align="center"
                colSpan={1}
                rowSpan={2}
                bgcolor="yellow">Year
          </th>
          <th align="center"
                colSpan={1}
                rowSpan={2}
                bgcolor="yellow">Date Added
          </th>
        </tr> <><br/> </>
      </thead>
    )
  }
  const TableBody = (props) => {
    const rows = props.movieData.map((row, index) => {
      return (
      <tr key={index}>
        <td align="center"
                bgcolor="aqua">{row.title} </td>
        <td align="left"
                bgcolor="aqua">{row.actors}</td>
        <td align="left"
                bgcolor="aqua">{row.plot}</td>
        <td align="center"
                bgcolor="aqua">{row.genre}</td>
        <td align="center"
                bgcolor="aqua">{row.imdbRating}</td>
        <td align="left"
                bgcolor="aqua">{row.director}</td>
        <td align="center"
                bgcolor="aqua" >{row.year}</td>
        <td align="center"
                bgcolor="aqua">{row.dateAdded}</td>
        <td>
          <button onClick={() => props.removeMovie(index)}>Delete</button>
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
