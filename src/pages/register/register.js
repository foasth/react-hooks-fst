import './style.css'
import {Button, Card, TextField} from "@material-ui/core";

const Register = () => {
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Inscription</h1>
                <TextField label="Nom"
                           type="search"
                           variant="outlined"/>
                <TextField label="Prénom"
                           type="search"
                           variant="outlined"/>
                <TextField label="Email"
                           type="search"
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           variant="outlined"/>
                <Button variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default Register