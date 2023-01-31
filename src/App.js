import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Table from './components/tables/Table.js';
import Chart from './components/charts/Chart.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={Table}>
          <h1>Table Libary</h1>
        </Route>
        <Route path="/charts" component={Chart}>
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
