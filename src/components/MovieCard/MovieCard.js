import React, {useEffect, useState} from "react";
import './MovieCard.css';

const apiKey = '29a5360b3d6d05d01218ccd685d1210f';
const upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=29a5360b3d6d05d01218ccd685d1210f";

function MovieCard() {
    
const [movies, setMovies] = useState([]);

useEffect(() => {
 fetch(upcomingMoviesUrl)
 .then(response => response.json())
 .then(json => setMovies(json.results))
}, []);

console.log(movies);

    return (

        <div className="MovieCard">
            {movies.map((movie) => {
                return (
                    <div className="card">
                    <img className="posters" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

                    <p>{movie.title}</p>
                    <p>{movie.release_date}</p>
                    </div>
                )

            })}
        </div>
        
    )
};

export default MovieCard;