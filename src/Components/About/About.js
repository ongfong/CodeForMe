import React from 'react';

import classes from './About.css';
import Image from '../../assets/profile3.jpg';

const about = () => {
  return (
    <div className={classes.container}>
      <div className={classes.aboutme_left}>
        <h1>About enfant K.</h1>
        <h2>I'm a FrontEnd Developer from Bangkok, Thailand</h2>
        <div className={classes.aboutme_left_content}>
          <p>
            I enjoy developing and design the web application whether a be HTML,
            CSS, Reactjs Redux and{' '}
            <strong>
              I love The Nature. <i class="fab fa-pagelines fa-2x"></i>
            </strong>
          </p>
        </div>
        <div className={classes.aboutme_left_content}>
          <h3>Education</h3>
          <p>Bachelor of Science (Computer Science), Thammasat University</p>
          <p>(November 2016 — June 2020).</p>
        </div>
        <div className={classes.aboutme_left_content}>
          <h3>Interships</h3>
          <p>Frontend Developer, Derive innovation Company Limited</p>
          <p>(June 2019 — August 2019).</p>
        </div>
        {/* <div className={classes.aboutme_left_icon}>
          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <i class="fab fa-github fa-2x" aria-hidden="true"></i>
        </div> */}
      </div>
      <div className={classes.aboutme_right}>
        <img src={Image} />
      </div>
    </div>
  );
};

export default about;

{
  /* <div className={classes.container}>
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
</div> */
}
