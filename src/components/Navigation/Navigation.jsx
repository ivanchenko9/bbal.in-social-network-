import React from 'react'
import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className={classes.app__nav}>
      <div className={classes.nav__inner}>
        <div className={classes.nav__item}>
          <NavLink
            className={classes.nav__link}
            to='/profile'
            activeClassName={classes.nav__active}>
            Profile
          </NavLink>
        </div>
        <div className={classes.nav__item}>
          <NavLink
            className={classes.nav__link}
            to='/dialogs'
            activeClassName={classes.nav__active}>
            Messages
          </NavLink>
        </div>
        <div className={classes.nav__item}>
          <NavLink
            className={classes.nav__link}
            to='/users'
            activeClassName={classes.nav__active}>
            Find users
          </NavLink>
        </div>
        {/* <div className={classes.nav__item}>
          <NavLink
            className={classes.nav__link}
            to='#'
            activeClassName={classes.nav__active}>
            News
          </NavLink>
        </div> */}
      </div>
    </nav>
  )
}

export default Navigation
