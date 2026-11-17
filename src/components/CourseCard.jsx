function CourseCard({ code, title, units, instructor }) {
  return (
    <div className="card course-card">
      <h3>{code}</h3>
      <p>{title}</p>
      <p>Units: {units}</p>
      <p>Instructor: {instructor}</p>
    </div>
  );
}

export default CourseCard;