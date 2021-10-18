import React from 'react';
import { Button, Box,makeStyles,AppBar, Toolbar } from '@material-ui/core'; 
import {Link} from 'react-router-dom';

const useStyles= makeStyles({
    btnBox:{
        width:'50vw',
        marginLeft:80,
        '&>*':{
            padding:'12px 12px 10px 12px',
            backgroundImage: 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)',
            boxShadow: '0 4px 15px 0 rgba(65, 132, 234, 0.75)',
            borderRadius:'40px',
            color:'#fff',
            fontWeight:700,
            marginRight:20,
            '&:hover':{
                backgroundImage: 'linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)',
                boxShadow: '0 4px 15px 2px rgba(149, 196, 190, 1)'
            }
        }
    }
})

const Home = () => {
   const classes = useStyles();
    return (
        <>
         <AppBar style={{width:'100vw',position:'static'}}>
             <Toolbar>
               <Box className={classes.btnBox}>
                   <Button to='/signup' component={Link}>Sign Up</Button>
                   <Button to='/login' component={Link} >Login</Button>
                   <Button to='/todo' component={Link} >Todo</Button>
                   {/* <Button to='/' component={Link} >Home</Button> */}

               </Box>
             </Toolbar>
         </AppBar>  
        </>
    )
}

export default Home;
