import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css'
import { Input } from '../FormsControls/FormsControls.js'
import { required, maxLengthCreator } from '../../Validators/validators.js'
import { connect } from 'react-redux'
import { login, logout } from '../../protoRedux/authReducer.js'
import { Redirect } from 'react-router-dom'
import classesForm from '../FormsControls/FormsControls.module.css'

const maxLengthCreator20 = maxLengthCreator(20)

const LoginForm = (props) => {
  return (
    <div className={classes.auth__content}>
      <form onSubmit={props.handleSubmit}>
        <div className={classes.auth__login}>
          <Field
            placeholder='Email'
            name='email'
            component={Input}
            validate={[required, maxLengthCreator20]}
          />
        </div>
        <div className={classes.auth__password}>
          <Field
            placeholder='Password'
            name='password'
            component={Input}
            type={'password'}
            validate={[required, maxLengthCreator20]}
          />
        </div>
        <div className={classes.auth__remember}>
          <Field
            name='rememberMe'
            component={Input}
            type='checkbox'
            validate={[required]}
          />
          remeber me
        </div>
        {props.error && (
          <div className={classesForm.form__total__error}>{props.error}</div>
        )}
        <div className={classes.auth__submit}>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }
  return (
    <div className={classes.auth__wrapper}>
      <div className={classes.auth__main__title}>Login page</div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login, logout })(Login)
