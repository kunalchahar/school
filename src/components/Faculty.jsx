import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "John Doe",
      position: "Principal",
      qualifications: "M.Ed",
      experience: "20 years of experience in educational administration",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualifications: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualifications: "M.A. in English",
      experience: "10 years of teaching experience",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
    },
  ];

  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Springdale Public School</h1>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Faculty</h2>
          <div className="space-y-6">
            {facultyMembers.map((member, index) => (
              <div key={index} className="border-b pb-4 mb-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p><strong>Position:</strong> {member.position}</p>
                <p><strong>Qualifications:</strong> {member.qualifications}</p>
                <p><strong>Experience:</strong> {member.experience}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Faculty;
