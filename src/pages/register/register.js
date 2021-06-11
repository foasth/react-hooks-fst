import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import API from '../../api/api';
import { useState } from 'react';

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const send2 =()=>{
        const params2 ={firstName,lastName,email,password}
        API.post('/register',params2)
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
const router =useHistory()
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Inscription</h1>
                <TextField label="Nom"
                           type="search"
                           value={firstName}
                           onChange={event => setFirstName(event.target.value)}
                           variant="outlined"/>
                <TextField label="Prénom"
                           type="search"
                           value={lastName}
                           onChange={event => setLastName(event.target.value)}
                           variant="outlined"/>
                <TextField label="Email"
                           type="search"
                           value={email}
                           onChange={event => setEmail(event.target.value)}
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           value={password}
                           onChange={event => setPassword(event.target.value)}
                           variant="outlined"/>
                <Button onClick={send2} variant="contained" color="primary">
                    Envoyer
                </Button>
                <span onClick={()=>router.push('/login')}>Login</span>
            </Card>
        </div>
    )
}
export default Register