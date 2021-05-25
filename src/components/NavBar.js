import classes from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <a href="/">crowdfund</a>
      <div className={classes.menu}>
        <FontAwesomeIcon className={classes.bars} icon="bars" />
      </div>
    </nav>
  )
}

export default NavBar