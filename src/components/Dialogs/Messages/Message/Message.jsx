import classes from './Message.module.css'

function Message(props) {
  return (
          <div className={classes.message__item}>
            <div className={classes.message__header}>
              <div className={classes.message__prof__photo}>
                <img
                  src={props.message__prof__photo}
                  alt='Error!message__prof__photo not found!'
                />
              </div>
              <div className={classes.message__title}>
                <div className={classes.message__prof__name}>{props.prof__name}</div>
                <div className={classes.message__date}>{props.message__date}</div>
              </div>
            </div>
            <div className={classes.message__content}>
              <div className={classes.message__text}>
                {props.message__text}
              </div>
            </div>
          </div>
  )
}

export default Message
