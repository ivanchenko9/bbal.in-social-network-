import classes from './Preloader.module.css'
import preloader from '../../images/AnimatedLoading/Rolling-1s-200px.svg'

const Preloader = (props) => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt='Loader_not_found!' />
    </div>
  )
}

export default Preloader
