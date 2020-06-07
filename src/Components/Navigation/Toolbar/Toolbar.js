import React from 'react';
import {Route, Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import classes from './Toolbar.css';
import Image from '../../../assets/showcase.jpg';

import About from '../../About/About';
import Projects from '../../Projects/Projects';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const toolbar = () => {
  const useStyle = useStyles();

  return (
    <div className={classes.container}>
      <Toolbar className={useStyle.toolbar}></Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Link to="/" className={classes.item}>
          Projects
        </Link>
        <Link to="/about" className={classes.item}>
          About
        </Link>
      </Toolbar>
      <div className={classes.showcase}>
        <img src={Image} />
      </div>
      <div>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Projects} />
      </div>
    </div>
  );
};

export default toolbar;
