import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//component
import Login from './component/login/Login';
import SignUp from './component/signUp/SignUp';
import Home from './component/home/Home';
import Todos from './component/todos/MainTodos';


function App() {
  return (
    <>
    <Router>
      <Home />
       <Switch>             
          <Route exact path='/login' render={props=>(
            <Login {...props}/> 
          )}></Route>   
          <Route exact path='/signup' component={SignUp}/>       
          <Route exact path='/todo' component={Todos}/>       
        </Switch>
    </Router>
    </>
  );
}

export default App;
