import React from 'react';

const About = props => (
  <div>
    <div className="text-title">About Page</div>
    <p>{props.id ? `Query value : ${props.id}` : 'There is no query'}</p>
  </div>
);

export default About;
