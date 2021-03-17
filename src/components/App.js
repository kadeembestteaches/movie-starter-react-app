import {useEffect,useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import MovieContext from "../context/MovieContext";
import MovieDecription from "../pages/MovieDescription";
import '../assets/css/App.css'
import "../assets/css/utilities.css"

const App = () => {

  const [movies, setMovies] = useState([]);


  useEffect(()=>{

    fetch("http://localhost:5000/movies")
    .then(res=>res.json())
    .then((data)=>{

      console.log(data);
      setMovies((previousState)=>{
        console.log("Set movies")
        previousState = data;
       return previousState
      });
      

    })
    .catch(err=>console.log(`Error ${err}`));

  },[])

 

  console.log("App")

  return (

    <MovieContext.Provider value={{movies}}>
      <Router>
        <Switch>
          <Route  exact path="/"><Home/></Route>
          <Route  path="/movies/:id"><MovieDecription/></Route>
        </Switch>
      </Router>
    </MovieContext.Provider>
  )
}

export default App
