import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DataTable from './pages/DataTable';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/datatable">
          <DataTable />
        </Route>
        <Route path="*"><div>Page Not Found</div></Route>
      </Switch>
    </Router>
  );
}

export default App;
