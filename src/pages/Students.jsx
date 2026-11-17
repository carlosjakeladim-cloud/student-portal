import StudentCard from "../components/StudentCard";

const students = [
  { id: 1, name: "Juan Dela Cruz", studentNumber: "2023-0001", course: "BSIT", year: "3rd Year" },
  { id: 2, name: "Maria Santos", studentNumber: "2023-0002", course: "BSCS", year: "2nd Year" },
  { id: 3, name: "Pedro Reyes", studentNumber: "2023-0003", course: "BSIT", year: "1st Year" },
  { id: 4, name: "Ana Garcia", studentNumber: "2023-0004", course: "BSIS", year: "4th Year" },
];

function Students() {
  return (
    <div className="page">
      <h1>Students</h1>
      <div className="card-container">
        {students.map((s) => (
          <StudentCard
            key={s.id}
            name={s.name}
            studentNumber={s.studentNumber}
            course={s.course}
            year={s.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;