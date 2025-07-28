export default function StudentView({ params }) {
  const students = [
    { id: 1, name: "prithvi", age: 21 },
    { id: 2, name: "yashwanth", age: 22 },
    { id: 3, name: "vijay", age: 20 },
    { id: 4, name: "erick", age:20},
  ];

  const student = students.find((s) => s.id === parseInt(params.id));

  if (!student) return <div>Student Not Found</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Detail</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}