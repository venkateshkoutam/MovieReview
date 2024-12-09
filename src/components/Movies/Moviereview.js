import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Moviereview.css';

const MovieReview = ({movies,deletemovie, edit}) => {
    console.log( "movies data in moviesreview component",movies);
    return (
       
          <table className='table m-2 '>
           <thead>
           <tr>
                <th>ID</th>
                <th>Moviename</th>
                <th>MovieReview</th>
            </tr>
           </thead>
            <tbody>
                {movies.map((m)=>{
                    console.log("m values",m)
                 return(
                    <tr key={m.id}>
                                <td>{m.id}</td>
                                <td>{m.movieName}</td>
                                <td>{m.reviewComments}</td>
                                <td>
                                    <button className='btn btn-primary m-1' onClick={()=>edit(m)}>Edit</button>
                                </td>

                                <td>
                                 <i className="bi bi-trash"onClick={() => deletemovie(m.id)}></i>
                                </td>
                            </tr>
                 )
                })}
            </tbody>

          </table>
      
    );
};

export default MovieReview;
