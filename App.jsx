
import { useState } from 'react'
import './App.css'
import Profile from './pages/Profile'
import Skills from './pages/Skills'
import Courses from './pages/Courses'

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard')

  return (
    <div className="main-container">

      <div className="sidebar">
        <h2>SkillTrack</h2>

        <ul>
          <li onClick={() => setCurrentPage('Dashboard')}>
            🏠 Dashboard
          </li>

          <li onClick={() => setCurrentPage('Profile')}>
            👩‍🎓 Student Profile
          </li>

          <li onClick={() => setCurrentPage('Skills')}>
            💻 My Skills
          </li>

          <li onClick={() => setCurrentPage('Courses')}>
            📚 Courses
          </li>

          <li>🎯 Placement Preparation</li>
          <li>📊 Progress</li>
          <li>🚪 Logout</li>
        </ul>
      </div>

      <div className="content">

        
{currentPage === 'Dashboard' ? (
  <div className="dashboard-page">

    <div className="dashboard-header">
      <span className="dashboard-tag">STUDENT OVERVIEW</span>
      <h1>Welcome to SkillTrack!</h1>
      <p>Track your learning journey and prepare for your dream career.</p>
    </div>

    <div className="dashboard-cards">

      <div className="dashboard-card">
        <span>Total Skills</span>
        <h2>05</h2>
        <p>Your skills development</p>
      </div>

      <div className="dashboard-card">
        <span>Courses Completed</span>
        <h2>03</h2>
        <p>Your learning progress</p>
      </div>

      <div className="dashboard-card">
        <span>Placement Readiness</span>
        <h2>75%</h2>
        <p>Your career preparation</p>
      </div>

    </div>

    <div className="dashboard-welcome">
      <h2>Your Growth Starts Here 🌿</h2>
      <p>
        Develop new skills, complete courses and improve
        your placement preparation to achieve your career goals.
      </p>
    </div>

  </div>
) : currentPage === 'Profile' ? (
          <Profile />
        ) : currentPage === 'Skills' ? (
          <Skills />
        ) : currentPage === 'Courses' ? (
          <Courses />
        ) : null}

      </div>
    </div>
  )
}

export default App
