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
            <span><b>Title :</b> {movieprops.title} </span>
            <span><b>Description :</b> {movieprops.description} </span>
            <span><b>Rating :</b> {movieprops.rating}</span>
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
