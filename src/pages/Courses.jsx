import CourseCard from "../components/CourseCard";

const courses = [
  { id: 1, code: "DCIT26", title: "Application Development and Emerging Technologies", units: 3, instructor: "Marlo N. Ortiz" },
  { id: 2, code: "DCIT22", title: "Data Structures and Algorithms", units: 3, instructor: "Prof. Lim" },
  { id: 3, code: "ITEC50", title: "Web Systems and Technologies", units: 3, instructor: "Prof. Cruz" },
  { id: 4, code: "DCIT24", title: "Information Management", units: 3, instructor: "Prof. Tan" },
];

function Courses() {
  return (
    <div className="page">
      <h1>Courses</h1>
      <div className="card-container">
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            code={c.code}
            title={c.title}
            units={c.units}
            instructor={c.instructor}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;