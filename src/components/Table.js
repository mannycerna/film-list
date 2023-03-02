/**
 * Table React Component 
 * 
 */

/**
 * HTML REVIEW
 * thead -> table head 
 * tr -> table row 
 * th -> table header 
 * tbody -> table body
 * td -> table cell
 */

 import React from "react";

 /*
 create two simple function components to make
 our table code more readable
 */
 
 //TABLE HEADER SIMPLE COMPONENT
 const TableHeader = () => {
     return (
         <thead>
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
        </tr>
             </thead>
     );
 }
 
 //TABLE BODY SIMPLE COMPONENT 
 const TableBody = (props) => {
 
 
     //construct rows
     // use map to iterate over each row and wrap it in
     // a html table row  
     //registered an on click listener to remove the character
     const rows = props.data.map((row, index) => {
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
     //return rows wrapped in tbody
     return <tbody>{rows}</tbody>
   }
 // TABLE is our main Component
 const Table = (props) => {

    const { 
      movies,
      removeMovie
    } = props;

    return ( 
      <table>
        <TableHeader/>
        <TableBody 
          data={movies} 
          removeMovie={removeMovie}
        />
      </table>
    )
 }
 
 export default Table