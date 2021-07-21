import classes from './Messages.module.css'
import Message from './Message/Message.jsx'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../Validators/validators.js'
import { Textarea } from '../../FormsControls/FormsControls'

const maxLengthCreator25 = maxLengthCreator(25)

const AddMessagesForm = (props) => {
  return (
    <div className={classes.message__adding}>
      <form onSubmit={props.handleSubmit}>
        <Field
          className={classes.message__text}
          placeholder='Write your messsage!'
          name='messageText'
          component={Textarea}
          validate={[required, maxLengthCreator25]}
        />
        <button className={classes.message__add__button}>Send message</button>
      </form>
    </div>
  )
}

const AddMessagesReduxForm = reduxForm({ form: 'messageForm' })(AddMessagesForm)

function Messages(props) {
  let messagesElements = props.messagesPage.messagesData.map((message) => (
    <Message
      key={message.id}
      message__prof__photo={message.message__prof__photo}
      prof__name={message.prof__name}
      message__date={message.message__date}
      message__text={message.message__text}
    />
  ))
  const addNewMessage = (formData) => {
    props.onSendMessageClick(formData.messageText)
  }

  return (
    <div className={classes.message__content}>
      <div className={classes.message__inner}>{messagesElements}</div>

      <AddMessagesReduxForm onSubmit={addNewMessage} />
    </div>
  )
}

export default Messages
