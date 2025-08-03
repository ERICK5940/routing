import { redirect } from 'next/navigation';

const students = [
  {
    id: 1,
    name: 'Kumar',
    age: 21,
    department: 'CSE',
    year: 'Final',
    phone: '9876543210',
    email: 'kumar@example.com',
    address: '123, Anna Nagar, Chennai'
  },
  {
    id: 2,
    name: 'Ravi',
    age: 22,
    department: 'ECE',
    year: 'Final',
    phone: '8765432109',
    email: 'ravi@example.com',
    address: '456, Gandhi Street, Coimbatore'
  },
  {
    id: 3,
    name: 'Meena',
    age: 20,
    department: 'IT',
    year: 'Third',
    phone: '7654321098',
    email: 'meena@example.com',
    address: '789, Kamarajar Salai, Madurai'
  },
];

export default function StudentDetail({ params, searchParams }) {
  const id = parseInt(params.id);
  const student = students.find((s) => s.id === id);

  if (!student || searchParams.allow !== 'true') {
    return (
      <div style={{ padding: '20px', color: 'crimson' }}>
        <h1>Access Denied 🚫</h1>
        <p>Please go back and select from the student list.</p>
        <a href="/students" style={{ textDecoration: 'underline' }}>← Go to List</a>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h1>{student.name}'s Details</h1>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>Year:</strong> {student.year}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Address:</strong> {student.address}</p>
    </div>
  );
}
