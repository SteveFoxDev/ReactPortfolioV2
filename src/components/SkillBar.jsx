import '../scss/components/SkillBar.scss';

const SkillBar = ({ skill }) => {

    const percentStyle = {width: `${skill.percentage}`};
  return (
    <div className='skill'>
      <div className='skill__info'>
        <span className='skill__name'>{skill.name}</span>
        <span className='skill__percentage'>{skill.percentage}</span>
      </div>
      <div className='skill__bar'>
        <span style={percentStyle} className='skill__progress'></span>
      </div>
    </div>
  );
};

export default SkillBar;
