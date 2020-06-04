import React from 'react';
import {Route, Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import classes from './Toolbar.css';
import Image from '../../../assets/image2.jpg';

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
    <React.Fragment>
      <div className={classes.container}>
        <Toolbar className={useStyle.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={useStyle.toolbarTitle}
          ></Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          <Link to="/projects" className={classes.item}>
            Projects
          </Link>
          <Link to="/about" className={classes.item}>
            About
          </Link>
        </Toolbar>
        <img src={Image} className={classes.showcase} />
        <div>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default toolbar;
