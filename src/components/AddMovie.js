import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page refresh

    const newMovieDetails = {
      title: title,
      year: 2023,
      genres: ["Drama", "Adventure"],
      rating: rating,
      imgURL: imgURL,
    };

    props.callbackToCreate(newMovieDetails)

    setTitle("");
    setRating("");
    setImgURL("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="enter the title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required={true}
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            min={0}
            max={10}
            name="rating"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            required={true}
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="imgURL"
            placeholder="enter URL"
            value={imgURL}
            onChange={(e) => {
              setImgURL(e.target.value);
            }}
          />
        </label>

        <button>Create</button>
      </form>
    </section>
  );
}

export default AddMovie;
