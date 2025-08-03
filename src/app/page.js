// src/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to the Student Portal</h1>
      <p>Select below to view student records</p>

      <Link href="/students">
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Go to Students Page
        </button>
      </Link>
    </div>
  );
}
