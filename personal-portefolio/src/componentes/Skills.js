import { Container } from "react-bootstrap";

export const Skills = () => {
  const skills = [
    { name: "C", level: "████████░░", percentage: "80%" },
    { name: "Python", level: "████████░░", percentage: "80%" },
    { name: "Haskell", level: "███████░░░", percentage: "70%" },
    {
      name: "React / JS",
      level: "██████▒░░░",
      percentage: "65%",
    } /* Usei o ▒ para o meio-bloco dos 5% */,
    { name: "Java", level: "█████░░░░░", percentage: "50%" },
    { name: "Erlang", level: "█████░░░░░", percentage: "50%" },
    { name: "R", level: "█████░░░░░", percentage: "50%" },
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <div className="terminal-window skills-window">
          <span className="tagline">
            &gt;_ root@taveira:~$ ./analyze_skills.sh
          </span>

          <h2>&gt; TECH_SKILLS</h2>
          <div className="skills-matrix">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-bar">
                  {skill.level}{" "}
                  <span className="skill-pct">[{skill.percentage}]</span>
                </span>
              </div>
            ))}
          </div>

          <h2 className="mt-5">&gt; TOOLS_&amp;_OS</h2>
          <div className="tools-grid">
            <span className="tool-tag">Linux</span>
            <span className="tool-tag">Bash / Scripting</span>
            <span className="tool-tag">Git / GitHub</span>
            <span className="tool-tag">VS Code</span>
            <span className="tool-tag">Wireshark</span>
            <span className="tool-tag">Cisco Packet Tracer</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
