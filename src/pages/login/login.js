import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import { useHistory } from 'react-router';
import { useContext, useState } from 'react';
import API from '../../api/api';
import Swal from 'sweetalert2';
import AuthContext from '../../context/auth.context';

const Login = () => {
    const auth = useContext(AuthContext)
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const send3 =()=>{
        const params3 ={email,password}
        API.post('/login',params3)
                .then(res => {
                    if (res.data.error) {
                        Swal.fire(res.data.msg, '', 'warning')
                    } else {
                        auth.login()
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

const router = useHistory()    
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>LOGIN</h1>
                <TextField label="Email"
                           type="search"
                           value={email}
                           onChange={event=>setEmail(event.target.value)}
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           value={password}
                           onChange={event=>setPassword(event.target.value)}
                           variant="outlined"/>
                
                <Button onClick={send3} variant="contained" color="primary">
                    Envoyer
                </Button>
                <span onClick={()=>router.push('/register')}>Register</span>
            </Card>
        </div>
    )
}
export default Login