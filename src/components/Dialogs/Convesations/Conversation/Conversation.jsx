import { NavLink } from 'react-router-dom'
import classes from './Conversation.module.css'

function Conversation(props) {
  const path = '/dialogs/' + props.id

  return (
    <div className={classes.convers__item}>
      <div className={classes.covers__photo}>
        <img src={props.covers__photo} alt='Error!covers__photo not found!' />
      </div>
      <div className={classes.covers__info}>
        <div className={classes.covers__name}>
          <NavLink to={path}>{props.covers__name}</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Conversation
