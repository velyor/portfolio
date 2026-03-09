import React, { useState } from "react";
import styles from "./skill.module.scss";

const skillData = [
  { id: "frontend", title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind", "Vite"] },
  { id: "backend", title: "Backend", skills: ["PHP", "C#", "MySQL"] },
  { id: "tools", title: "Tools", skills: ["VS Code", "Git & GitHub", "Postman", "Figma", "Component Integration"] },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillData[0].id);
  const activeSkills = skillData.find(s => s.id === activeTab);

  return (
    <section className={styles.skillsRoot}>

      {/* LETTERA DECORATIVA FUORI DAL CONTAINER */}
      <span className={styles.decorLetter}>Skylls</span>

      <div className={styles.skillsContainer}>

        <div className={styles.tabsWrapper}>
          {skillData.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${tab.id === activeTab ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className={styles.skillCard}>
          <h3 className={styles.skillCategory}>{activeSkills?.title}</h3>
          <ul className={styles.skillList}>
            {activeSkills?.skills.map((skill, idx) => (
              <li key={idx} className={styles.skillListItem}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
