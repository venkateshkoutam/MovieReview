import React, { useState, useEffect } from 'react';
import { fetchData, deleteMovie, postMovie, updateMovieReview } from './service/api.js';
import MovieReview from './components/Movies/Moviereview';
import AddMovie from './components/AddMovies/AddMovie.js';
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [initial, setInitial] = useState({
    id: '',
    MovieName: '',
    ReviewComments: ''
  });
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let result = await fetchData();
    setMovies(result);
  };

  const deletedata = async (id) => {
    await deleteMovie(id);
    getdata();
  };
  const adddata = async (movie) => {
    const data = {
      movieName: movie.MovieName,
      reviewComments: movie.ReviewComments,
    };
    const data1 = {
      id: movie.id,
      movieName: movie.MovieName,
      reviewComments: movie.ReviewComments
    };

    try {
      if (edit) {
        console.log("inside edit function", edit);
        await updateMovieReview(movie.id, data1);
        setEdit(false); // Reset the edit flag 
      } else {
        // Adding new movie
        await postMovie(data);
      }
    } catch (error) {
      console.error("Error in adddata:", error);
    }
    // Reset form fields and fetch updated data
    setInitial({
      MovieName: '',
      ReviewComments: ''
    });
    setOpen(false);
    getdata(); // need to display list on ui after submit
  };


  const handleEdit = (movie) => {
    console.log("handle edit func", movie)
    setInitial({
      id: movie.id,
      MovieName: movie.movieName,
      ReviewComments: movie.reviewComments
    });
    setOpen(true);
    setEdit(true);  // Opens the form to edit
  };

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setInitial({
      movieName: '',
      MovieReview: ''
    })
    setOpen(false);
  };

  return (
    <div className="wrapper m-5 w-50">
      <h2 className='text-primary float-left'>MoviesList</h2>
      <button className='btn btn-primary text' onClick={openForm}>AddMovie</button>
      <MovieReview movies={movies} deletemovie={deletedata} edit={handleEdit} />
      {open && (
        <AddMovie
          closeform={closeForm}
          getdata={getdata}
          formdata={initial}  // Passing movie data to the form
          adddata={adddata}
        />
      )}
    </div>
  );
}

export default App;
