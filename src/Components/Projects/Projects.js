import React from 'react';

import Card from '../UI/Card/Card';
import image from '../../assets/TheNature.jpg';

import classes from './Projects.css';

const projects = () => {
  return (
    <div className={classes.container}>
      <h1>My Projects</h1>
      <div className={classes.project_items}>
        <Card
          name="The Nature"
          image={image}
          link="https://thenature-codeforme.netlify.app/"
          className={classes.card}
        />
      </div>
    </div>
  );
};

export default projects;
