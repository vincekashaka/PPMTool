import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './componets/Dashboard';
import Header from './componets/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProject from './componets/project/AddProject';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dashboard/addProject' element={<AddProject />} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
