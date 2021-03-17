import {useEffect,useState} from 'react';
import {useParams} from "react-router-dom"

const MoiveDescription = ()=> {
    
    const {id} = useParams();
    const [movie,setMovie] = useState({});

    useEffect(()=>{

    console.log(id)
     fetch("http://localhost:5000/movies/"+id)
     .then(res=>res.json())
     .then((movies)=>{
       console.log(movies);
       setMovie(movies)
 
     })
     .catch(err=>console.log(`Error ${err}`));
 
   },[])


    return (

        <section id="movie-description-section">
            <div className="container grid grid-col-4 grid-gap-2">

                <img className="" src={'/img/'+movie.poster} alt=""/>
            
                <div className="movie-description-content-area">
                    <h2>{movie.title}</h2>
                    <p>{movie.dateReleased}</p>
                     <h3>Overview</h3>
                     <p>{movie.description}</p>
                </div>
            </div>

        </section>
    )
}

export default MoiveDescription
