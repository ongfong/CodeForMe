import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Toolbar.css';

const toolbar = () => {
  return (
    <section className={classes.section}>
      <div className={classes.overlay}>
        <nav className={classes.navbar}>
          <div className={classes.container}>
            <h1 className={classes.logo}>.CodeForMe.</h1>
            <ul>
              <li>
                <a href="/project">Project.</a>
              </li>
              <Link to="/about">
                <a>About.</a>
              </Link>
            </ul>
          </div>
        </nav>
        <div className={classes.sectioninner}>
          <h1>FrontEnd Developer.</h1>
        </div>
      </div>
    </section>
  );
};

export default toolbar;
