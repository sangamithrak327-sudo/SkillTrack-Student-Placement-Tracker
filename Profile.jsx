import React, { useState } from 'react'

function Profile() {

  const [student, setStudent] = useState({
    name: '',
    registerNumber: '',
    department: '',
    year: '',
    email: '',
    cgpa: ''
  })

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Student Profile Saved Successfully!')
    console.log(student)
  }

  return (
    <div className="profile-page">

      <div className="profile-header">
        <span>STUDENT INFORMATION</span>
        <h1>My Profile</h1>
        <p>Manage your personal and academic information.</p>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>

        <div className="profile-section">

          <h2>Personal Information</h2>
          <p>Enter your basic personal details.</p>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Student Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={student.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="profile-field">
              <label>Register Number</label>
              <input
                type="text"
                name="registerNumber"
                placeholder="Enter register number"
                value={student.registerNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="profile-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>

        </div>

        <div className="profile-section">

          <h2>Academic Information</h2>
          <p>Enter your current academic details.</p>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Department</label>
              <input
                type="text"
                name="department"
                placeholder="Example: BCA"
                value={student.department}
                onChange={handleChange}
                required
              />
            </div>

            <div className="profile-field">
              <label>Year of Study</label>
              <select
                name="year"
                value={student.year}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
              </select>
            </div>

            <div className="profile-field">
              <label>Current CGPA</label>
              <input
                type="number"
                name="cgpa"
                placeholder="Enter your CGPA"
                min="0"
                max="10"
                step="0.01"
                value={student.cgpa}
                onChange={handleChange}
                required
              />
            </div>

          </div>

        </div>

        <div className="profile-actions">
          <button type="submit">
            Save Profile
          </button>
        </div>

      </form>

    </div>
  )
}

export default Profile