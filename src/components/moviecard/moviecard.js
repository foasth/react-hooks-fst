import './style.css'
import {Card} from "@material-ui/core";
import StarsRating from 'stars-rating'
import React from 'react'
import {useState} from 'react'
import Swal from "sweetalert2";
import API from "../../api/api";
import {useHistory} from 'react-router-dom'


const MovieCard = (props) => {
    const router = useHistory()
    const {movieprops} = props
    const [value, setValue] = useState(movieprops.rating);

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
    const URI = 'http://localhost:3001/image/'
    const remove = () => {
        Swal.fire({
            title: "Are you sure to delete this movie?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
        })
            .then(ok => {
                if (ok.isConfirmed) {
                    API.post('/delete', {_id: movieprops._id})
                        .then(ok => {
                            Swal.fire('', '', 'success').then(l => {
                                router.go(0)
                            })
                        })
                        .catch(err => {
                            Swal.fire('', '', 'error')
                        })
                }
            })
    }
    return (
        <Card className={'h-card'}>
            <div className={'img-film'}>
                <img src={URI + movieprops.poster}/>
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
            <span onClick={remove} style={{fontSize: 20, cursor: "pointer"}}>X</span>
        </Card>
    )}

    export default MovieCard
