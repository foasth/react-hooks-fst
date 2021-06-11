import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useState} from "react";
import Swal from 'sweetalert2';
import API from "../../api/api";
import { useHistory } from 'react-router';

const AddMovie = () => {
    const router = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const [poster, setPoster] = useState('')
    const send =()=>{
        const params ={title,description,rating,poster}
        API.post('/add',params)
                .then(res => {
                    if (res.data.error) {
                        Swal.fire(res.data.msg, '', 'warning')
                    } else {
                        Swal.fire('', '', 'success')
                    .then(ok => {
                        if (ok.isConfirmed) {
                            router.push('/movie')
                        }
                    })
                 }
                })
                .catch(err=>{
                     Swal.fire('','','error')
                })
       
    }
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>NEW MOVIE</h1>
                <TextField label="Title"
                           type="search"
                           value={title}
                           onChange={event => setTitle(event.target.value)}
                           variant="outlined"/>
                <TextField label="Description"
                           type="search"
                           value={description}
                           onChange={event => setDescription(event.target.value)}
                           variant="outlined"/>
                <TextField label="Rating"
                           type="search"
                           value={rating}
                           onChange={event => setRating(event.target.value)}
                           variant="outlined"/>
                 <TextField label="Poster"
                           type="file"
                           value={poster}
                           onChange={event => setPoster(event.target.value)}
                           variant="outlined"/>
                <Button onClick={send} variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default AddMovie