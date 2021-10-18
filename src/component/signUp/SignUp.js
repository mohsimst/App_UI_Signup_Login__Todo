import React, { useState } from 'react';
import '../todos/Todos.css';
import { makeStyles, Button, Grid } from '@material-ui/core';
import { addData, getData } from '../Services/api';
import {Link} from 'react-router-dom';


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
        height:'80vh',
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
        background: 'linear-gradient(to right, #380036, #0cbaba)',
        color:'#fff',
        padding:'1vh 0'

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
        boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.3)',
        marginTop:'2.5vh',
        '&:hover':{
        background: 'linear-gradient(#027b81,#0cbaba)',
        boxShadow: '2px 2px 10px 10px #bccece',

        }

    },
    input:{
        width:'100%',
        height:'5vh',
        padding:'10px 10px',
        outline:'none',
        margin:'1.3vh 0',
        border:'none',
        // boxShadow:'1px 1px 5px 2px #bccece, 1px 1px 5px 2px #bccece',
        borderRadius:10,
        fontSize:'1em',
        transition: 'all 0.1s',
        '&:focus':{
           transform: 'Scale(1.03)',
            boxShadow:'1px 1px 5px 2px #bccece, 1px 1px 5px 2px #bccece',
        }

    }
})

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    password: ''
}



const Login = () => {
    const classes = useStyles();
    const [user, setUser] = useState(initialValue)
    const { name, username, email, phone, website, password } = user


    const updatedValue = (e) => {
        // console.log("hello1 click")
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
        // setValue({...value,[e.target.name]: e.target.value})
        // {name} {username} {email} {phone} {website} {password}
    }

    const myFunction = async (e) => {
        e.preventDefault(); 
        await addData(user)
    }

    const getUser = async () => {
        await getData()
    }
    

    return (
        <>
            <Grid container className={classes.container}>
                <Grid container item lg={3} md={4} sm={5} xs={7} className={classes.SignupContainer}>
                   <Grid item lg={12} md={12} sm={12} xs={12}>
                    <form onSubmit={myFunction} autoComplete="off">
                    <h1 className={classes.title}>Sign Up</h1>
                    <input className={classes.input} onChange={(e) => updatedValue(e)} name='name' value={name} type="text" placeholder="enter name" required/><br />
                    {/* <TextField className={classes.input} onChange={(e) => updatedValue(e)} name='name' value={name} type="text" label="name" required /><br /> */}
                    <input className={classes.input} onChange={(e) => updatedValue(e)} type="text" placeholder="enter username" label="username" name='username' value={username} required /><br />
                    <input className={classes.input} onChange={(e) => updatedValue(e)} type="email" placeholder="enter email" label="email" name='email' value={email} required /><br />
                    <input className={classes.input} onChange={(e) => updatedValue(e)} type="text" placeholder="enter phone (optional)" label="phone" name='phone' value={phone} /><br />
                    <input className={classes.input} onChange={(e) => updatedValue(e)} type="text" placeholder="enter website (optional)" label="website" name='website' value={website} /><br />
                    <input className={classes.input} onChange={(e) => updatedValue(e)} type="password" placeholder="enter password" label="password" name='password' value={password} required /><br />
                    <Button variant="contained" type="submit" color="secondary" className={classes.btn} fullWidth>Sign Up</Button>
                    <Button to='/login' component={Link} variant="contained" onClick={() => getUser()} className={classes.btn} fullWidth>Login</Button>
                </form>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Login;
