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
        title: 'Fight Club',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into their reason to live.',
        rating: 4.5,
        posterurl: F01
    },
    {
        title: 'Star Wars IV',
        description: "Luke Skywalker joins forces with a crew to save the galaxy from the Empire's world-destroying battle station and the mysterious Darth Vader.",
        rating: 3,
        posterurl: F02
    },
    {
        title: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        rating: 5,
        posterurl: F03
    },
    {
        title: 'Jurassic Park',
        description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        rating: 3.5,
        posterurl: F04
    },
    {
        title: 'Goodfellas',
        description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
        rating: 4,
        posterurl: F05
    },
    {
        title: 'Ghost In The Shell',
        description: 'A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.',
        rating: 3,
        posterurl: F06
    },
    {
        title: 'Princess Mononoke',
        description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
        rating: 5,
        posterurl: F07
    },
    {
        title: 'The Lord Of The Ring',
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
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

