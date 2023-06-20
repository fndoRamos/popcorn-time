import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

function Main() {
  //   const moviesArray = [
  //     {
  //       id: 1,
  //       title: "The Godfather",
  //       rating: 9,
  //     },
  //     {
  //       id: 2,
  //       title: "Forrest Gump",
  //       rating: 9,
  //     },
  //     {
  //       id: 3,
  //       title: "Gladiator",
  //       rating: 8,
  //     },
  //   ];

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    //moviesToDisplay.splice(); // NEVER MODIFY STATE DIERCTLY!!

    const newList = moviesToDisplay.filter((elm) => elm.id !== movieId);

    setMoviesToDisplay(newList);
  };


    // CONDITIONAL RENDERING: OPTION A (ELEMENT VARIABLES)
    let message = "";
    if (moviesToDisplay.length > 0) {
      message = <h1>We currently have {moviesToDisplay.length} movies available</h1>
    } else {
      message = <h1>Sorry, there are no movies to display</h1>
    }





  return (
    <div className="Main">

      {message}

      {moviesToDisplay.map((elm) => {
        return (
          <div key={elm.id} className="card">
            <p>{elm.title}</p>
            <p>Year: {elm.year}</p>
            <p>Rating: {elm.rating}</p>

            {/* CONDITIONAL RENDERING: OPTION B (AND OPERATOR) */}
            { elm.rating > 8 && <p>RECOMMENDED</p> }

            <p>genres:
            {elm.genres.map((elm, index) => {
              return <span key={index}> {elm},</span>;
            })}
            </p>

            {/* CONDITIONAL RENDERING: OPTION C (TERNARY OPERATOR) */}
            {elm.imgURL ? <img src={elm.imgURL} alt="movie" /> : <img src="https://dummyimage.com/182x268/ffffff/000000" alt="movie" />}

            <p>
            <button
              onClick={() => {
                deleteMovie(elm.id);
              }}
            >
              Detele movie
            </button>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
