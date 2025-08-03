import Link from 'next/link';

const students = [
  {
    id: 1,
    name: 'Kumar',
    age: 21,
    department: 'CSE',
    year: 'Final',
    phone: '111111111',
    email: 'kumar@example.com',
    address: '123, huhdcudcugwdc,fihuygdv'
  },
  {
    id: 2,
    name: 'Ravi',
    age: 22,
    department: 'ECE',
    year: 'Final',
    phone: '222222222',
    email: 'ravi@example.com',
    address: '456, chvuasvuhcjd,hbuchbhub'
  },
  {
    id: 3,
    name: 'Meena',
    age: 20,
    department: 'IT',
    year: 'Third',
    phone: '333333333',
    email: 'meena@example.com',
    address: '789, cwjdcbudguyWDHJS,SDCIWUGFUY'
  },
];

export default function StudentList() {
  return (<center>
    <div style={{ padding: '20px' }}>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: '10px' }}>
            <Link href={`/students/${student.id}?allow=true`}>
              {student.name} ({student.department})
            </Link>
          </li>
        ))}
      </ul>
    </div></center>
  );
}
