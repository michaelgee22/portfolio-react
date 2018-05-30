import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Icon from './Icon';
import { 
  LINKEDIN, 
  GITHUB, 
  TWITTER, 
  VIEWPAGE,
  EMAIL,
  PHONE,
  LOCATION } from './IconList';
import michael from '../images/michael.jpg';

const styles = {
  topBar: {
    backgroundColor: '#3849A2',
    padding: '10px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topBarIcon: { margin: '0 3px 0 2px' },
  topBarBtn: {
    color: 'white',
    marginRight: '5px'
  },
  btnText: { marginLeft: '5px' },

  introSection: {
    backgroundColor: '#3849A2',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  portfolioImg: {
    width: '175px',
    height: '175px',
    border:'5px solid white',
    borderRadius: '50%'
  },
  mainTitle: {
    fontSize: '4.8em',
    padding: '15px 0 5px 0'
  },
  secondaryTitle: {
    fontSize: '2.8em',
    padding: '5px 0',
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  introDesc: {
    maxWidth: '800px',
    fontSize: '1.6em',
    lineHeight: '1.5',
    textAlign: 'center',
    padding: '0 15px 25px 15px'
  },

  contactSection: {
    backgroundColor: '#32408F',
    color: 'white',
    fontSize: '1.6em',
    padding: '25px 0'
  },
  contactContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contactItem: { display: 'flex', marginRight: '30px' },
  contactText: { marginLeft: '10px', marginTop: '3px' },

  navSection: {
    backgroundColor: '#2B387C',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  navBtn: { color: 'rgba(255, 255, 255, 0.8)' }
};

const Jumbotron = props => {
  const { classes } = props;

  return (
    <header>
      <div className={classes.topBar}>
        <div>
          <IconButton href="https://www.linkedin.com/in/michael-gee/" target="_blank">
            <Icon icon={LINKEDIN} />
          </IconButton>

          <IconButton className={classes.topBarIcon} href="https://twitter.com/michaelgee7" target="_blank">
            <Icon icon={TWITTER} />
          </IconButton>

          <IconButton href="https://github.com/michaelgee22" target="_blank">
            <Icon icon={GITHUB} />
          </IconButton>
        </div>

        <Button className={classes.topBarBtn} href="https://drive.google.com/file/d/1_c5XlaReGkwkzgRngFk6cukfmYB9twY3/view" target="_blank">
          <Icon icon={VIEWPAGE} />
          <span className={classes.btnText}>View My Resume</span>
        </Button>
      </div>

      <div className={classes.introSection}>
        <img className={classes.portfolioImg} src={michael} alt="Michael Gee Headshot"/>
        <h1 className={classes.mainTitle}>Michael Gee</h1>
        <h2 className={classes.secondaryTitle}>Full Stack Developer</h2>

        <p className={classes.introDesc}>
          Profile info goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.
        </p>
      </div>

      <div className={classes.contactSection}>
        <div className={classes.contactContent}>
          <div className={classes.contactItem}>
            <Icon icon={EMAIL} />
            <span className={classes.contactText}>michaelgee221@gmail.com</span>
          </div>
          <div className={classes.contactItem}>
            <Icon icon={PHONE} />
            <span className={classes.contactText}>678 446 1512</span>
          </div>
          <div className={classes.contactItem}>
            <Icon icon={LOCATION} />
            <span className={classes.contactText}>Atlanta, GA</span>
          </div>
        </div>
      </div>

      <div className={classes.navSection}>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('experience')}>Experience
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('skills')}>Skills
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('portfolio')}>Portfolio
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('education')}>Education
        </Button>
        <Button className={classes.navBtn} onClick={() => props.triggerComponentScroll('contact')}>Contact
        </Button>
      </div>

    </header>
  );
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Jumbotron);