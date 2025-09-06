import React from "react";
import "./education.css";

export default function Education() {
  return (
    <section className="education">
        <h2><u>Education</u></h2>
        <div className = "edu-item">
            <h3>Bachelor of Engineering in Computer Science - IoT, Cyber Security & Blockchain</h3>
            <p>Dayananda Sagar Academy Of Technology & Management</p>
            <p>Percentage : 82% (As of 6th semester)</p>
            <p>2022 - 2026</p>
        </div>
        <div className = "edu-item">
            <h3>Pre-University course (PCMB)</h3>
            <p>Kadamba Pre University College, Mandya</p>
            <p>Percentage : 91.83%</p>
            <p>2020 - 2022</p>
        </div>
        <div className = "edu-item">
            <h3>10th Grade</h3>
            <p>S C V English Medium High School</p>
            <p>Percentage : 88.96%</p>
            <p>2019 - 2020</p>
        </div>
    </section>
  );
}