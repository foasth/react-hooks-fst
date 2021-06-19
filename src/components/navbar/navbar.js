import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';
import AuthContext from '../../context/auth.context';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar =()=> {
  const auth = useContext(AuthContext)
  const router = useHistory()
  const classes = useStyles();
  const logout = ()=>{
    auth.logout();
    localStorage.setItem('auth','false')
    router.push('./login')
  }


  return (
    <div className={classes.root}>
      <AppBar style={{background:'black'}} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Movie
          </Typography>
          {!auth.auth && (
            <>
          <Button onClick={()=>router.push('/login')} color="inherit">Login</Button>
          <Button onClick={()=>router.push('/register')} color="inherit">Regiter</Button>
            </>
          )}
          <Button onClick={()=>router.push('/addmovie')} color="inherit">+</Button>
          {auth.auth && (
          <Button onClick={logout} color="inherit">Log out→</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar