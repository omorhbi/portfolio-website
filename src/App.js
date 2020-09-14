import React, { Component, useState, useEffect } from 'react';
import { HashRouter as Router, Link, Route } from "react-router-dom";
//import { Navbar } from 'react-bootstrap';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Supperwhere from './Supperwhere';
import BigOBot from './BigOBot';
import Journal from './Journal';
import logo from './logo.svg';
import Resume from './Omar_Morhbi_Resume.pdf';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';


const App = () => {

  return (

    <Router basename = "/">
      <div className="App">

        <Navbar />
        
        <Route exact path="/">
            <About />
        </Route>
        <Route path="/projects">
            <Projects />
        </Route>
        <Route exact path = "/supperwhere">
            <Supperwhere />
        </Route>
        <Route exact path = "/a-certain-daily-journal">
            <Journal />
        </Route>
        <Route exact path = "/big-o-bot">
            <BigOBot />
        </Route>
      </div>
    </Router>
  );
}

export default App;
