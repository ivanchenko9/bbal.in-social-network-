import classes from './Conversations.module.css'
import Conversation from './Conversation/Conversation.jsx'

function Conversations(props) {
  let converseElements = props.messagesPage.conversData.map((convesation) => (
    <Conversation
      key={convesation.id}
      id={convesation.id}
      covers__name={convesation.convers__name}
      covers__photo={convesation.convers__photo}
    />
  ))

  return <div className={classes.convers__inner}>{converseElements}</div>
}

export default Conversations
