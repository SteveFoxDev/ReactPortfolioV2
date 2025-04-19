import Section from './Section';
import ProjectCard from './ProjectCard';
import projectList from '../utilities/projectList';

const Projects = () => {


  const renderedProject =  projectList.map((project, i) => {
      return <ProjectCard key={`${project.title}${i}`} project={project}/>
    });
  
  return (
    <Section id='projects' title='Projects' >{renderedProject}</Section>
  );
};

export default Projects;
