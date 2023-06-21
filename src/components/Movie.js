

function Movie(props) {
  return (
    <div className="card">
      <p>{props.movieDetails.title}</p>
      <p>Year: {props.movieDetails.year}</p>
      <p>Rating: {props.movieDetails.rating}</p>

      {/* CONDITIONAL RENDERING: OPTION B (AND OPERATOR) */}
      {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

      <p>
        genres:
        {props.movieDetails.genres.map((elm, index) => {
          return <span key={index}> {elm},</span>;
        })}
      </p>

      {/* CONDITIONAL RENDERING: OPTION C (TERNARY OPERATOR) */}
      {props.movieDetails.imgURL ? (
        <img src={props.movieDetails.imgURL} alt="movie" />
      ) : (
        <img src="https://dummyimage.com/182x268/ffffff/000000" alt="movie" />
      )}

      <p>
        {/* <button
          onClick={() => {
            deleteMovie(props.movieDetails.id);
          }}
        >
          Detele movie
        </button> */}

        <button onClick={() => {props.callbackToDelete(props.movieDetails.title)}} >Delete movie</button>

      </p>
      <hr />
    </div>
  );
}

export default Movie;
