import "./Header.css";

function Header(props) {


// CONDITIONAL RENDERING: OPTION A (ELEMENT VARIABLES)
let message = "";
if (props.numberOfMovies > 0) {
  message = <h1>We currently have {props.numberOfMovies} movies available</h1>
} else {
  message = <h1>Sorry, there are no movies to display</h1>
}


  return (
    <div className="Header">
      <h1>Popcorn Time</h1>
      {message}
    </div>
  );
}

export default Header;
