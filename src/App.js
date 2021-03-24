import './App.scss';
import Home from './pages/Home';
import Informations from './pages/Informations';

import {BrowserRouter ,Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
     
      <Switch>
            <Route exact path="/" component={Home}  />
            <Route exact path="/Informations" component={Informations} />
            
            <Redirect to={"/"}/>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
