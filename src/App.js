import './App.css';
import{ BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import Movie from "./pages/movie/movie";
import AddMovie from "./pages/addmovie/addmovie"
import P404 from "./pages/404/404";

    const App =()=>{
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/movie"/>
                    </Route>
                    <Route path="/movie" component={Movie}/>
                    <Route path="/addmovie" component={AddMovie}/>
                    <Route component={P404}/>
                </Switch>
            </BrowserRouter>
            
        );
    }
export default App;


