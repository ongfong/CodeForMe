import React from 'react';

import classes from './Footer.css';

const footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <h3>.CodeForMe.</h3>
        <div className={classes.footer_cols}>
          <ul>
            <li>
              <p>Create Design Frontend web Application.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Contant</p>
            </li>
            <li>
              <p>Eh_2939@hotmail.com</p>
            </li>
            <li>
              <p>080-532-7731</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Follow</p>
            </li>
            <li>
              <a href="https://github.com/ongfong">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/puangporn-kowsamuang-b62b661aa/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.credit}>
        <p>&copy; 2020 CodeForMe All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default footer;
