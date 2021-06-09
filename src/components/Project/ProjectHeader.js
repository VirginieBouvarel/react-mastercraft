import classes from './ProjectHeader.module.css';
import Card from '../UI/Card';
import logoMastercraft from '../../assets/logo-mastercraft.svg';
import iconBookmark from '../../assets/icon-bookmark.svg';
import Button from './../UI/Button';

const ProjectHeader = (props) => {
  return (
    <Card className={classes['project-header']}>

      <div className={classes.logo}>
        <img src={logoMastercraft} alt="logo Mastercraft" />
      </div>

      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>

      <div className={classes.actions}>

        <Button>
          Back this project
        </Button>

        <div className={classes.bookmark}>
          <img src={iconBookmark} alt="" />
        </div>


      </div>
    </Card>
  )
}

export default ProjectHeader