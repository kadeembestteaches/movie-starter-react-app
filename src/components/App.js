import {useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import MovieContext from "../context/MovieContext";
import MovieDecription from "../pages/MovieDescription";
import UserReg from "../pages/Registration";
import '../assets/css/App.css'
import "../assets/css/utilities.css"

const App = () => {

  const [movies, setMovies] = useState([]);
  const [bestSellers, setBestSellers] = useState([])


  useEffect(()=>{

    fetch("http://localhost:3001/movies")
    .then(res=>res.json())
    .then((data)=>{

      console.log(data);
      setMovies((previousState)=>{
        console.log("Set movies")
        previousState = data;
       return previousState
      });

      getBesllers(data)
      

    })
    .catch(err=>console.log(`Error ${err}`));

  },[])

  const getBesllers =(movies)=>{

    console.log("Best Sellers")
    const bestSellers = movies.filter(movie=>movie.bestSeller);

    setBestSellers(bestSellers);
  }

  console.log("App")

  return (

    <MovieContext.Provider value={{movies,bestSellers}}>
      <Router>
        <Switch>
          <Route  exact path="/"><Home/></Route>
          <Route  path="/movies/:id"><MovieDecription/></Route>
          <Route  path="/users"><UserReg/></Route>
        </Switch>
      </Router>
    </MovieContext.Provider>
  )
}

export default App
