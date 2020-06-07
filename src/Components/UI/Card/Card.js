import React from 'react';

import classes from './Card.css';

const card = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className={classes.container}>
        <img src={props.image} alt={props.name} />
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>
            Status: <strong>Incomplete</strong>
          </p>
        </div>
      </div>
    </a>
  );
};

export default card;
