import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://github.com/lakshita10341/assignEase" target="_blank" rel="noreferrer"><h2>AssignEase</h2></a>
                    <p>Role-based task management tool built with Django, React, and PostgreSQL, featuring task tracking, comments, and real-time updates.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/lakshita10341/whisperVanish" target="_blank" rel="noreferrer"><h2>WhisperVanish</h2></a>
                    <p>Real-time chat app with disappearing messages in group chats, developed using React, Express, and MongoDB.</p>
                </div>

                <div className="project">
                    <a href="https://channeli.in/placement_and_internship/resume/" target="_blank" rel="noreferrer"><h2>Placement & Internship Portal</h2></a>
                    <p>Production-ready portal used by 10,000+ IITR students; optimized resume submissions, added query handling, and built dashboards for students, companies, and PICs.</p>
                </div>

                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><h2>Medicine Reminder App</h2></a>
                    <p>Flutter app with Firebase backend to schedule and trigger daily medicine reminders, grouped by meals and supporting real-time updates.</p>
                </div>

            </div>
        </div>
    );
}


export default Project;