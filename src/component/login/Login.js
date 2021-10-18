import React,{ useState} from 'react';
import '../todos/Todos.css';
import { Link } from 'react-router-dom';
import { Button, makeStyles, Grid, Typography } from '@material-ui/core'; 

//component
import { getData } from '../Services/api';


const useStyles = makeStyles({
    container: {
        background: 'linear-gradient(#380036, #0cbaba)',   
        width: '100%',
        height:'100vh',
        paddingBottom:'200px',
        // height: '100vh',
        //   fontFamily:'Roboto',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    SignupContainer: {
        boxSizing: 'border-box',
        width: '25%',
        height:'55vh',
        // height: '80vh',
        padding: '15px 18px',
        marginTop: '50px',
        borderRadius: '10px',
        // backgroundColor:'red',
        boxShadow: '2px 2px 10px 10px #bccece',
        '& > *': {
            marginBottom: 12
        }
    },
    title: {
        textAlign: 'center',
        height:'6vh',
        paddingTop:'1vh',
        background: 'linear-gradient(to right, #380036, #0cbaba)',
        color:'#fff',
    
    },
    btn: {
        border: 'none',
        borderRadius: '4vh',
        height:'6vh',
        fontWeight:700,
        borderColor: 'transparent',
        background: 'linear-gradient(#380036, #0cbaba)',
        color: '#fff',
        fontSize: '18px',
        outline: 'none',
        boxShadow: '5px 5px 15px -5px rgba(0, 0, 0, 0.3)',
        marginTop:'2.5vh',
        '&:hover':{
        background: 'linear-gradient(#027b81,#0cbaba)',
        boxShadow: '2px 2px 10px 10px #bccece'
        }

    },
    text:{
      textAlign:'center',
    //   padding:'1vh',
         fontSize:'20px',
         letterSpacing:'2px',
         marginTop:'2.5vh',
    //   backgroundColor:'red',
      fontWeight:600,
      color:'#fff'
    },
    input:{
        width:'100%',
        height:'5.5vh',
        padding:'10px 10px',
        outline:'none',
        margin:'1.7vh 0',
        border:'none',
        borderRadius:10,
        fontSize:'1em',
        '&:focus':{
           transform: 'Scale(1.03)',
            boxShadow:'1px 1px 5px 2px #bccece, 1px 1px 5px 2px #bccece',
        }

    }
})


const initialValue={
    email:'',
    password:''
}
const Login = (props) => {
    const [user, setUser] = useState(initialValue);
    const { email, password} = user;
    // const history = useHistory();
    const classes = useStyles();
    // console.log(props)
    const LoggedIn = async() => {
       
    }
    const updatedValue =(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }
    const logged=async(e)=>{
        e.preventDefault()
        const data = await getData(email)
       console.log(data)
        props.history.push('/todo')
    }
    return(
        <Grid container className={classes.container}>
                <Grid container item lg={3} md={4} sm={5} xs={7} className={classes.SignupContainer}>
                   <Grid item lg={12} md={12} sm={12} xs={12}>
                    <form onSubmit={logged}>
                    <h1 className={classes.title}>Log In</h1>
                    {/* <TextField className={classes.input} onChange={(e) => updatedValue(e)} name='name' value={name} type="text" label="name" required fullWidth /><br /> */}

                    <input className={classes.input} onChange={(e) => updatedValue(e)} type="email" placeholder="enter email" label="email" name='email' value={email} required/><br />
                    <input className={classes.input} onChange={(e) => updatedValue(e)} type="password" placeholder="enter password" label="password" name='password' value={password} required/><br />
                    <Button variant="contained" type="submit" onClick={() => LoggedIn()} color="secondary" className={classes.btn} fullWidth>Login</Button>
                    <Typography className={classes.text}>OR</Typography>
                    <Button variant="contained"  to='/signup' component={Link} className={classes.btn} fullWidth>Sign Up</Button>
                </form>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;