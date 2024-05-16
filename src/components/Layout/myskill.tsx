interface SkillItem {
    name: string;
}

interface Skill {
    name: string;
    languages: SkillItem[];
    supports: SkillItem[];
    tools: SkillItem[];
}

interface SkillSectionProps {
    title: string;
    items: SkillItem[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => (
    <div className="skill-section">
        <h3>{title}</h3>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
    </div>
);

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const supportTitle = skill.name === 'Front End Developer' ? 'UI/UX' : 'Database';

    return (
        <div className="skill-card skill-card-horizontal">
            <h2>{skill.name}</h2>
            <div className="skill-content">
                <SkillSection title="Languages" items={skill.languages} />
                <SkillSection title={supportTitle} items={skill.supports} />
                <SkillSection title="Tools" items={skill.tools} />
            </div>
        </div>
    );
};


export default SkillCard