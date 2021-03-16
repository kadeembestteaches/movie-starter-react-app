import {useContext} from 'react';
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";

const BestSeller = () => {

    const {bestSellers} = useContext(MovieContext);

    return (

        <section id="section-movie-list">
            <div className= 'container'>
            <h1>Best Sellers</h1>
                <div className="grid grid-gap-1 grid-col-4">
                    {bestSellers.map(movie=>(<Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} dateReleased={movie.dateReleased}/>))}    
                </div>
            </div>
        </section>

    )
}

export default BestSeller
