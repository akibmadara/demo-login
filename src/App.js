import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './bootstrap.min.css'

import HomeScreen from './screen/HomeScreen'
import TaskScreen from './screen/TaskScreen'
import UserScreen from './screen/UserScreen'
import Header from './components/Header';
import LoginScreen from './screen/LoginScreen';

function App() {
  return (
    <>
    <Router>
      <Header />  
      <Route path='/' exact component={HomeScreen} />
      <Route path='/Home' exact component={HomeScreen} />
      <Route path='/User'  component={UserScreen} />
      <Route path='/Task'  component={TaskScreen} />
      <Route path='/Login'  component={LoginScreen} />

    </Router>

    </>
 
  );
}

export default App;
