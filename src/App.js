import { useState } from "react";
import movies from "./data/movies.json";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AddMovie from "./components/AddMovie";

import "./App.css";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const addMovie = (newMovie) => {

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

  }


  const deleteMovie = (movieTitle) => {
    //moviesToDisplay.splice(); // NEVER MODIFY STATE DIERCTLY!!

    const newList = moviesToDisplay.filter((elm) => elm.title !== movieTitle);

    setMoviesToDisplay(newList);
  };



  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />

      <AddMovie callbackToCreate={addMovie} />

      <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie} />

      <Footer />
    </div>
  );
}

export default App;
