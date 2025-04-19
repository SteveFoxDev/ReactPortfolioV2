import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Button from './Button';
import '../scss/components/ProjectModal.scss';


const ProjectModal = ({ project, onCancel }) => {

  return (
    <div className='project-modal'>
      <img className='project-modal__img' src={project.image} alt='' />
      <div className='project-modal__box-2'>
        <h4 className='heading-4'>Project Info:</h4>
        <p className='mb-sm'>{project.info}</p>
        <h4 className='heading-4'>Technologies:</h4>
        <p className='project-modal__skills'>{project.skills}</p>
        {project.note && <div className="project-modal__note">
          <h4 className='heading-4'>Note:</h4><p>{project.note}</p>
        </div>}
        <div className='project-modal__btn-group'>
          <Button
            type='anchor'
            href={project.link}
            className='btn btn-blue project-modal__btn-1'
            onClick={onCancel}
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className="project-modal__btn--contents">
            Website <FaExternalLinkAlt className='project-modal__btn--icon-2' />
            </div>
            
          </Button>
          <Button
            type='anchor'
            href={project.code}
            className='btn btn-green project-modal__btn-2'
            onClick={onCancel}
            rel='noopener noreferrer'
            target='_blank'
          >
            <div className="project-modal__btn--contents">
              <FaGithub className='project-modal__btn--icon-1' /> Github 
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
