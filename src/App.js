import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Table from './components/tables/Table.js';
import Chart from './components/charts/Chart.js';
import Css from './components/css/Css.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/cssfun">CSS Fun</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Chart />
        </Route>
        <Route path="/cssfun">
          <h1>CSS Fun</h1>
          <Css />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
