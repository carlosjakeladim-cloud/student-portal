function StudentCard({ name, studentNumber, course, year }) {
  return (
    <div className="card student-card">
      <h3>{name}</h3>
      <p>Student No: {studentNumber}</p>
      <p>Course: {course}</p>
      <p>Year Level: {year}</p>
    </div>
  );
}

export default StudentCard;