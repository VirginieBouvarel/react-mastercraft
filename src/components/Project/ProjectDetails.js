import ProjectAbout from './ProjectAbout';
import ProjectIntro from './ProjectIntro';
import ProjectStats from './ProjectStats';
import classes from './ProjectDetails.module.css';



const ProjectDetails = () => {
  return (
    <div className={classes['project-details']}>
      <ProjectIntro />
      <ProjectStats />
      <ProjectAbout />
    </div>
  )
}

export default ProjectDetails