import './style.css'
import {Card} from "@material-ui/core";
import StarsRating from 'stars-rating'
import React from 'react'
import {useState} from 'react'


const MovieCard = (props) => {
    const {movieprops} = props
    const [value, setValue] = useState(movieprops.rating);

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
       
    return (
        <Card className={'h-card'}>
            <div className={'img-film'}>
                <img src={movieprops.posterurl}/>
            </div>
            <div className={'info-film'}>
            <span>Title : {movieprops.title} </span>
            <span>Description : {movieprops.description} </span>
            <span>Rating : {movieprops.rating}</span>
            </div>

            <div className={'info-rating'}>
                    <StarsRating
                    count={5}
                    value={value}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />

            </div>
        </Card>
    )}


export default MovieCard
