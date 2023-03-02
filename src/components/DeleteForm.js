import React from 'react';

function DeleteAllButton(props) {
    return <button onClick={
        () => props.removeAllMovies()
    }>
        Delete All</button>
}


export default DeleteAllButton
