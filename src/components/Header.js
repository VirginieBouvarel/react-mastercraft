import classes from './Header.module.css';
import NavBar from './NavBar';


const Header = () => {
  return (
    <div className={classes.header}>
      <NavBar />
    </div>
  )
}

export default Header