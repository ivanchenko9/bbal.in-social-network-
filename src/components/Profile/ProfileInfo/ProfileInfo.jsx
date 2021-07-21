import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../Preloader/Preloader.jsx'
//import ProfileStatus from './ProfileStatus/ProfileStatus.jsx'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks.jsx'

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  } else {
    return (
      <div className={classes.profile__content}>
        <div className={classes.profile__photo}>
          <img src={props.profile.photos.large} alt='ERROR!Logo not found.' />
        </div>
        <div className={classes.profile__info}>
          <div className={classes.profile__name}>
            <span>Name: </span>
            {props.profile.fullName}
          </div>
          <div className={classes.profile__sername}>
            <span>Sername: </span>
            {/* {props.profile__sername} */}
          </div>
          <div className={classes.profile__country}>
            <span>Country: </span>
            {/* {props.profile__country} */}
          </div>
          <div className={classes.profile__city}>
            <span>City: </span>
            {/* {props.profile__city} */}
          </div>
          <ProfileStatusWithHooks
            status={props.status}
            updateUserStatus={props.updateUserStatus}
          />
          <div className={classes.profile__other}>
            <span>About you: </span>
            {/* {props.profile__other} */}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileInfo
