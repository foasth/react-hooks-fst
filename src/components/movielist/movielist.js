import './style.css'
import MovieCard from "../moviecard/moviecard";

const MovieList = (props) => {
    const {moviesprops} = props
    return (
        <div className={'h-container'}>
            {moviesprops.map(dd => <MovieCard movieprops={dd}/>)}
        </div>
    )
}
export default MovieList
