import { useState } from 'react'

function Courses() {

  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState('')
  const [status, setStatus] = useState('In Progress')

  const addCourse = (e) => {
    e.preventDefault()

    if (!courseName.trim()) {
      alert('Please enter course name')
      return
    }

    const newCourse = {
      id: Date.now(),
      name: courseName,
      status: status
    }

    setCourses([...courses, newCourse])

    setCourseName('')
    setStatus('In Progress')
  }

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id))
  }

  return (
    <div className="courses-page">

      <h1>My Courses</h1>
      <p>Track your learning and completed courses.</p>

      <div className="course-form">

        <h2>Add New Course</h2>

        <form onSubmit={addCourse}>

          <input
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>In Progress</option>
            <option>Completed</option>
            <option>Not Started</option>
          </select>

          <button type="submit">Add Course</button>

        </form>

      </div>

      <div className="course-list">

        <h2>Course List</h2>

        {courses.length === 0 ? (
          <p>No courses added yet.</p>
        ) : (

          courses.map((course) => (

            <div className="course-item" key={course.id}>

              <div>
                <h3>{course.name}</h3>
                <p>Status: {course.status}</p>
              </div>

              <button onClick={() => deleteCourse(course.id)}>
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  )
}

export default Courses