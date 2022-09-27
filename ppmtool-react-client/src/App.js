import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './componets/Dashboard';
import Header from './componets/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProject from './componets/project/AddProject';
import UpdateProject from './componets/project/UpdateProject';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/addProject' element={<AddProject />} />
          <Route exact path='/updateProject/:id' element={<UpdateProject />} />

          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
