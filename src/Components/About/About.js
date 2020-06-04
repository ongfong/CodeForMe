import React from 'react';

import classes from './About.css';

const about = () => {
  return (
    <div className={classes.container}>
      <h1>About Enfant K.</h1>
      <div className={classes.content}>
        <div className={classes.content_profile}>
          <h2>Puangporn Kowsamruang</h2>
          <h3>Education</h3>
          <p>Bachelor of Science (Computer Science), Thammasat University</p>
          <p>(November 2016 — June 2020)</p>
        </div>
        <div className={classes.content_contact}>
          <h3>Front-end Developer.</h3>
          <p>
            An experienced web Developer by building using MERN Stack with
            React/Next.js.
          </p>
          <h3>Contact</h3>
          <div className={classes.content_contact_icon}>
            <span style={{color: 'Dodgerblue'}}>
              <i class="fas fa-envelope fa-2x"></i>
              <p>Eh_2939@hotmail.com</p>
            </span>
            <span style={{color: 'Mediumslateblue'}}>
              <i class="fab fa-github fa-2x"></i>
              <p>https://github.com/ongfong/</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
