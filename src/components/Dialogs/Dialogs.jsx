import classes from './Dialogs.module.css'
import ConversationsContainer from './Convesations/ConversationsContainer'
import MessagesContainer from './Messages/MessagesContainer'

function Dialogs(props) {
  return (
    <div className={classes.dialogs__wrapper}>
      <div className={classes.dialogs__title}>Dialogs</div>
      <div className={classes.dialogs__inner}>
        <ConversationsContainer
        //store={props.store}
        />
        <MessagesContainer
        //store={props.store}
        />
      </div>
    </div>
  )
}

export default Dialogs
