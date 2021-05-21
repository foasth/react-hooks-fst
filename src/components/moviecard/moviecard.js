import './style.css'
import {Card} from "@material-ui/core";


const MovieCard = (props) => {
    const {movieprops} = props
    return (
        <Card className={'h-card'}>
            
            <span>Title : {movieprops.title} </span>
            <span>Description : {movieprops.description} </span>
            <span>PosterUrl : {movieprops.posterurl}</span>
            <span>Rating : {movieprops.rating}</span>
        </Card>
    )
}

export default MovieCard
