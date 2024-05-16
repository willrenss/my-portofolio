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
        <div 
            className={`skill-card skill-card-horizontal ${skill.name === 'Front End Developer' ? "slide-right" : "slide-left"}`}>
            <div className=" fullCenter-flex">
                <div className="icon">
                    {skill.name === 'Front End Developer' ? (
                        <svg fill="#790604" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
                        </svg>
                    ) : (
                        <svg fill="#790604" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
                        </svg>
                    )}
                </div>                
            </div>
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