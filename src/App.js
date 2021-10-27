import {BrowserRouter , Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import {makeStyles} from '@material-ui/core';
import { Switch } from 'react-router';

function App() {

  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh",
    },
  }));

  const classes = useStyles();


  return (
    <BrowserRouter>
    <div className={classes.App}>
    <Header/>
    <Switch>
    <Route path="/" component={HomePage} exact/>
    </Switch>

    </div>


    </BrowserRouter>
    
    
  );
}

export default App;
