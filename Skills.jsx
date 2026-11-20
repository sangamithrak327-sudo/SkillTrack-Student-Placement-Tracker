
import { useState } from 'react'

function Skills() {
  const [skills, setSkills] = useState([])
  const [skillName, setSkillName] = useState('')
  const [skillLevel, setSkillLevel] = useState('Beginner')

  const addSkill = (e) => {
    e.preventDefault()

    if (!skillName.trim()) {
      alert('Please enter a skill name')
      return
    }

    const newSkill = {
      id: Date.now(),
      name: skillName.trim(),
      level: skillLevel
    }

    setSkills([...skills, newSkill])
    setSkillName('')
    setSkillLevel('Beginner')
  }

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id))
  }

  const getProgress = (level) => {
    if (level === 'Beginner') return 30
    if (level === 'Intermediate') return 65
    return 100
  }

  return (
    <div className="skills-page">

      <div className="skills-header">
        <div>
          <span className="page-tag">STUDENT DEVELOPMENT</span>
          <h1>My Skills</h1>
          <p>Build your skills. Track your growth. Get placement ready.</p>
        </div>

        <div className="skills-icon">✦</div>
      </div>

      <div className="skills-summary">
        <div className="summary-card">
          <span>Total Skills</span>
          <h2>{skills.length}</h2>
          <p>Skills added by you</p>
        </div>

        <div className="summary-card">
          <span>Advanced Skills</span>
          <h2>{skills.filter(s => s.level === 'Advanced').length}</h2>
          <p>Skills mastered</p>
        </div>

        <div className="summary-card">
          <span>Learning Skills</span>
          <h2>{skills.filter(s => s.level !== 'Advanced').length}</h2>
          <p>Skills in development</p>
        </div>
      </div>

      <div className="add-skill-section">
        <div className="section-heading">
          <div className="section-icon">＋</div>
          <div>
            <h2>Add a New Skill</h2>
            <p>Enter your skill and select your current level.</p>
          </div>
        </div>

        <form onSubmit={addSkill} className="skill-input-form">

          <div className="skill-field">
            <label>Skill Name</label>
            <input
              type="text"
              placeholder="Example: Java, Python, HTML..."
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />
          </div>

          <div className="skill-field">
            <label>Skill Level</label>
            <select
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <button type="submit" className="add-skill-btn">
            + Add Skill
          </button>

        </form>
      </div>

      <div className="my-skills-section">

        <div className="skills-list-heading">
          <div>
            <h2>Your Skills</h2>
            <p>Monitor your technical and professional growth.</p>
          </div>

          <span className="skill-count">{skills.length} Skills</span>
        </div>

        {skills.length === 0 ? (
          <div className="empty-skills">
            <div className="empty-icon">📚</div>
            <h3>No skills added yet</h3>
            <p>Start building your profile by adding your first skill.</p>
          </div>
        ) : (

          <div className="skills-grid">
            {skills.map((skill) => (

              <div className="skill-card" key={skill.id}>

                <div className="skill-card-top">
                  <div className="skill-letter">
                    {skill.name.charAt(0).toUpperCase()}
                  </div>

                  <span className={`level-badge ${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>

                <h3>{skill.name}</h3>

                <div className="progress-info">
                  <span>Skill Progress</span>
                  <strong>{getProgress(skill.level)}%</strong>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${getProgress(skill.level)}%` }}
                  ></div>
                </div>

                <button
                  className="delete-skill-btn"
                  onClick={() => deleteSkill(skill.id)}
                >
                  Delete Skill
                </button>

              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  )
}

export default Skills
