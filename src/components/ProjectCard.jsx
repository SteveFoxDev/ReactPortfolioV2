import { useState } from 'react';
import { GiClick } from "react-icons/gi";
import { MdOutlineAdsClick } from "react-icons/md";
import Modal from './Modal';
import ProjectModal from './ProjectModal';
import '../scss/components/ProjectCard.scss';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const openProject = () => {
    setShowModal(true);
  };
  const onCancel = () => {
    setShowModal(false);
  };

  const content = <ProjectModal onCancel={onCancel} project={project} />;

  return (
    <>
      <div className='project-card' onClick={openProject}>
        <div className='project-card__overlay'>
            <h3 className='heading-4 project-card__overlay--title'>{project.title}</h3>
            <p className='project-card__overlay--skills'>{project.skills}</p>
            <MdOutlineAdsClick className="project-card__overlay--icon" />
        </div>
          <div className="project-card__img-container">
            <img
              src={project.image}
              alt={project.img__alt}
              className='project-card__img'
            />
              <MdOutlineAdsClick className="project-card__icon" />

          </div>
      </div>
      {showModal && (
        <Modal onCancel={onCancel} header={project.title}>
          {content}
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;
