import classes from './Header.module.css'
import logo from '../images/logos/Title_for_social(croped)(small).jpg'
import { NavLink } from 'react-router-dom'

function Header(props) {
  return (
    <header className={classes.app__header}>
      <div className={classes.header__inner}>
        <div className={classes.header__logo}>
          <img src={logo} alt='ERROR!Logo not found.' />
        </div>
        <div className={classes.login__block}>
          {props.isAuth ? (
            <>
              <NavLink to={'/profile'}>{props.login}</NavLink>
              <div>
                <button onClick={props.logout}>Logout</button>
              </div>
            </>
          ) : (
            <NavLink to={'/login'}>Login</NavLink>
          )}
        </div>
        <div className={classes.header__title}>Stay in touch!</div>
      </div>
    </header>
  )
}

export default Header
