import classes from './Post.module.css'
import profImg from '../../profile_img/photo_2021-05-19_09-11-46.jpg'

function Post(props) {
  return (
    <div className={classes.posts__item}>
      <div className={classes.post__header}>
        <div className={classes.post__profile__logo}>
          <img src={profImg} alt='ERROR!Logo not found.' />
        </div>
        <div className={classes.post__profile__info}>
          <div className={classes.post__profile__name}>Daniyl Ivanchenko</div>
          <div className={classes.post__profile__time}>{props.postTime}</div>
        </div>
      </div>
      <div className={classes.post__content}>{props.postText}</div>
    </div>
  )
}

export default Post
