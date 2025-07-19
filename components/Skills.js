import {
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaBrain, FaRobot,
  FaGitAlt, FaGithub, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiR, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiNumpy, SiPandas,
  SiMysql, SiPostgresql, SiMongodb, SiApacheairflow, SiApachespark, SiTableau,
  SiPowerbi, SiNextdotjs, SiFirebase, SiTypescript, SiCplusplus
} from 'react-icons/si';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "R", icon: <SiR /> },
      { name: "C", icon: "🔤" },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "TypeScript", icon: <SiTypescript /> }
    ]
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Apache Spark", icon: <SiApachespark /> },
      { name: "Airflow", icon: <SiApacheairflow /> }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Matplotlib", icon: "📊" },
      { name: "Seaborn", icon: "🌊" },
      { name: "Feature Engineering", icon: "🛠️" },
      { name: "Data Cleaning", icon: "🧹" },
      { name: "Statistical Analysis", icon: "📐" },
      { name: "Hypothesis Testing", icon: "🧪" },
      { name: "A/B Testing", icon: "⚖️" },
      { name: "Model Evaluation", icon: "📈" }
    ]
  },
  {
    category: "Data Analyst",
    skills: [
      { name: "Power BI", icon: <SiPowerbi /> },
      { name: "Tableau", icon: <SiTableau /> },
      { name: "Excel", icon: "📊" },
      { name: "Google Analytics", icon: "📈" },
      { name: "Exploratory Data Analysis", icon: "🔍" },
      { name: "KPI Development", icon: "🎯" },
      { name: "Pivot Tables", icon: "📊" },
      { name: "Dashboard Creation", icon: "📈" },
      { name: "Data Wrangling", icon: "🧰" }
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Feature Engineering", icon: "🛠️" },
      { name: "Cross-Validation", icon: "✅" },
      { name: "Hyperparameter Tuning", icon: "🔧" },
      { name: "Model Selection", icon: "🎯" },
      { name: "Model Deployment", icon: "🚀" },
      { name: "MLOps", icon: "⚙️" }
    ]
  },
  {
    category: "Deep Learning",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Neural Networks", icon: <FaBrain /> }
    ]
  },
  {
    category: "Artificial Intelligence",
    skills: [
      { name: "Computer Vision", icon: "👁️" },
      { name: "Natural Language Processing", icon: <FaRobot /> },
      { name: "Reinforcement Learning", icon: "🎮" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "AWS", icon: <FaAws /> }
    ]
  }
];

export default function Home() {
  return (
    <div style={{ padding: "4rem 2rem", fontFamily: "sans-serif", color: "#e2e8f0", background: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", marginBottom: "3rem", color: "#3b82f6" }}>💪 Skills</h1>
      {skillCategories.map((group, idx) => (
        <div key={idx} style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: "#38bdf8",
            borderBottom: "2px solid #334155",
            paddingBottom: "5px"
          }}>{group.category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {group.skills.map((skill, i) => (
              <span key={i} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#1e293b",
                padding: "8px 14px",
                borderRadius: "999px",
                fontSize: "0.95rem",
                border: "1px solid #334155",
                color: "#e2e8f0"
              }}>
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
