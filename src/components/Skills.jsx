import Section from './Section';
import Skill from './SkillBar';
import skills from '../utilities/skills';


const renderedSkills = skills.map((skill) => {
  return <Skill key={skill.name} skill={skill} />
});


const Skills = () => {
  return (
    <Section id='skills' title='Skills' >{renderedSkills}</Section>
  );
};

export default Skills;
