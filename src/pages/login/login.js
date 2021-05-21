import './style.css'
import {Button, Card, TextField} from "@material-ui/core";
import { useHistory } from 'react-router';

const Login = () => {
const router = useHistory()    
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>LOGIN</h1>
                <TextField label="Email"
                           type="search"
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           variant="outlined"/>
                
                <Button variant="contained" color="primary">
                    Envoyer
                </Button>
                <span onClick={()=>router.push('/register')}>Register</span>
            </Card>
        </div>
    )
}
export default Login