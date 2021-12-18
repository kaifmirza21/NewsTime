import React, {Component }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NewsContainer from './components/NewsContainer';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route  path="/" element={<NewsContainer category="general"/>} />
          <Route  path="/home" element={<NewsContainer category="general"/>} />
          <Route  path="/general" element={<NewsContainer category="general"/>} />
          <Route  path="/science" element={<NewsContainer category="science"/>} />
          <Route  path="/technology" element={<NewsContainer category="technology"/>} />
          <Route  path="/business" element={<NewsContainer category="business"/>} />
          <Route  path="/sports" element={<NewsContainer category="sports"/>} />
          <Route  path="/health" element={<NewsContainer category="health"/>} />
          <Route  path="/entertainment" element={<NewsContainer category="entertainment"/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;





