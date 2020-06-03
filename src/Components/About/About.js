import React from 'react';

import Profile from '../../assets/profile.jpg';

import classes from './About.css';

const about = () => {
  return (
    <div>
      <div className={classes.content_top}>
        <h1>PUANGPORN KOWSAMRUANG</h1>
      </div>
      <div className={classes.profile_content}>
        <div>
          <h2>Contants</h2>
          <p>Bangkok, Thailand</p>
          <p>eh_2939@hotmail.com</p>
          <p>0805327731</p>
        </div>
        <div>
          <h2>Date of birth</h2>
          <p>29/12/1997</p>
        </div>
        <div>
          <h2>Education</h2>
          <p>Bachelor of Science (Computer Science), Thammasat University</p>
        </div>
      </div>
    </div>
  );
};

export default about;
