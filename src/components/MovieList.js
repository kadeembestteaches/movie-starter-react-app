import {useContext} from 'react';
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";

const MovieList = () => {

    const {movies} = useContext(MovieContext);

    return (

        <section id="section-movie-list">
            <div className= 'container'>
            <h1>Now Playing</h1>
                <div className="grid grid-gap-1 grid-col-4">
                    {movies.map(movie=>(<Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} dateReleased={movie.dateReleased}/>))}    
                </div>
            </div>
        </section>

    )
}

export default MovieList
