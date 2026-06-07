import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const [leetcode, setLeetcode] = useState({
    easy: "...",
    medium: "...",
    hard: "...",
    status: "CONNECTING...",
  });

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/jts666/solved")
      .then((response) => response.json())
      .then((data) => {
        if (data.easySolved !== undefined) {
          setLeetcode({
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved,
            status: "ACTIVE",
          });
        } else {
          setLeetcode((prev) => ({ ...prev, status: "ERROR_FETCHING" }));
        }
      })
      .catch(() => setLeetcode((prev) => ({ ...prev, status: "OFFLINE" })));
  }, []);

  const skills = [
    { name: "C", level: "████████░░", percentage: "80%" },
    { name: "Python", level: "████████░░", percentage: "80%" },
    { name: "Haskell", level: "███████░░░", percentage: "70%" },
    {
      name: "React / JS",
      level: "██████▒░░░",
      percentage: "65%",
    },
    { name: "Java", level: "█████░░░░░", percentage: "50%" },
    { name: "Erlang", level: "█████░░░░░", percentage: "50%" },
    { name: "R", level: "█████░░░░░", percentage: "50%" },
  ];

  const languages = [
    { name: "Português (Nativo)", level: "██████████", percentage: "100%" },
    { name: "Inglês", level: "████████░░", percentage: "80%" },
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
            <span className="tool-tag">LaTeX</span>
          </div>

          <h2 className="mt-5">&gt; SPOKEN_LANGUAGES</h2>
          <div className="skills-matrix mb-5">
            {languages.map((lang, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{lang.name}</span>
                <span className="skill-bar">
                  {lang.level}{" "}
                  <span className="skill-pct">[{lang.percentage}]</span>
                </span>
              </div>
            ))}
          </div>
          <h2 className="mt-5">&gt; PLATFORMS_&amp;_METRICS</h2>
          <Row className="mt-4">
            <Col xs={12} md={6} className="mb-4">
              <a
                href="https://leetcode.com/u/jts666/"
                target="_blank"
                rel="noreferrer"
                className="platform-card-link"
              >
                <div className="platform-card leetcode-card">
                  <h3>[ LeetCode Profile ]</h3>
                  <p className="status-online">STATUS: {leetcode.status}</p>
                  <div className="platform-stats">
                    <div>
                      Easy Solved:{" "}
                      <span className="stat-highlight">[{leetcode.easy}]</span>
                    </div>
                    <div>
                      Medium Solved:{" "}
                      <span className="stat-highlight">
                        [{leetcode.medium}]
                      </span>
                    </div>
                    <div>
                      Hard Solved:{" "}
                      <span className="stat-highlight">[{leetcode.hard}]</span>
                    </div>
                  </div>
                  <span className="click-hint">
                    &gt;_ CLICK_TO_DECRYPT_PROFILE
                  </span>
                </div>
              </a>
            </Col>

            <Col xs={12} md={6} className="mb-4">
              <a
                href="https://tryhackme.com/p/taveira20051"
                target="_blank"
                rel="noreferrer"
                className="platform-card-link"
              >
                <div className="platform-card tryhackme-card">
                  <h3>[ TryHackMe Profile ]</h3>
                  <p className="status-online">STATUS: BREACHING</p>
                  <div className="platform-stats">
                    <img
                      src="https://tryhackme-badges.s3.amazonaws.com/taveira20051.png"
                      alt="TryHackMe Badge"
                      className="thm-badge"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <span className="click-hint">
                    &gt;_ CLICK_TO_DECRYPT_PROFILE
                  </span>
                </div>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
