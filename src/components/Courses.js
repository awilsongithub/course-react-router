import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><a href='/courses/html'>HTML</a></li>
        <li><a href='/courses/css'>CSS</a></li>
        <li><a href='/courses/javascript'>JavaScript</a></li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route path="/courses/html" component={HTML} />
    <Route path="/courses/css" component={CSS} />
    <Route path="/courses/javascript" component={JavaScript} />

  </div>
);

export default Courses;
