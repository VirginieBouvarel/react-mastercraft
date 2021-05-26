import ProjectAbout from './ProjectAbout';
import ProjectHeader from './ProjectHeader';
import ProjectStats from './ProjectStats';
import classes from './ProjectDetails.module.css';



const ProjectDetails = () => {
  return (
    <div className={classes['project-details']}>
      <ProjectHeader />
      <ProjectStats />
      <ProjectAbout />
    </div>
  )
}

export default ProjectDetails