/*
NOTES

 */

import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';



const App = () => (
  // renders root <Router> listening for url changes
  // <Route ... components render if path matches
  // render= if need to show component w/ specific props
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <About title='Foobar!'/>} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />

    </div>
  </BrowserRouter>

);

export default App;
