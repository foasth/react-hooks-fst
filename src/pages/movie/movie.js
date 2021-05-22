import Filter from "../../components/filter/filter";
import MovieList from "../../components/movielist/movielist";
import {useState} from "react";
import Navbar from "../../components/navbar/navbar";
import './style.css'
import F01 from '../../asset/film-1.jpg';
import F02 from '../../asset/film-2.jpg';
import F03 from '../../asset/film-3.jpg';
import F04 from '../../asset/film-4.jpg';
import F05 from '../../asset/film-5.jpg';
import F06 from '../../asset/film-6.jpg';
import F07 from '../../asset/film-7.jpg';
import F08 from '../../asset/film-8.jpg';




const moviesList = [
    {
        title: 'Movie 01',
        description: 'Movie description 01',
        rating: 4.5,
        posterurl: F01
    },
    {
        title: 'Movie 02',
        description: 'Movie description 02',
        rating: 3,
        posterurl: F02
    },
    {
        title: 'Movie 03',
        description: 'Movie description 03',
        rating: 5,
        posterurl: F03
    },
    {
        title: 'Movie 04',
        description: 'Movie description 04',
        rating: 3.5,
        posterurl: F04
    },
    {
        title: 'Movie 05',
        description: 'Movie description 05',
        rating: 4,
        posterurl: F05
    },
    {
        title: 'Movie 06',
        description: 'Movie description 06',
        rating: 3,
        posterurl: F06
    },
    {
        title: 'Movie 07',
        description: 'Movie description 07',
        rating: 5,
        posterurl: F07
    },
    {
        title: 'Movie 08',
        description: 'Movie description 08',
        rating: 5,
        posterurl: F08
    }
]
const Movie = () => {
    const [movies, setMovies] = useState(moviesList)
    return (
        <>  
            <Navbar/>
            <Filter movies={movies} setMovies={setMovies} moviesList={moviesList}/>
            <MovieList moviesprops={movies}/>
        </>
    );
}

export default Movie;

