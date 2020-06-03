import React from 'react';
import {Link} from 'react-router-dom';

import video from '../../assets/video.mp4';
import classes from './StickyFooter.css';

const stickyFooter = () => {
  return (
    <React.Fragment>
      <section className={classes.showcase}>
        <div className={classes.videocontainer}>
          <video
            className={classes.video}
            src={video}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className={classes.content}>
          <h1>.CodeForMe.</h1>
          <h3>by enfant K.</h3>
          <Link to="/main">
            <a className={classes.btn}>See More</a>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default stickyFooter;
