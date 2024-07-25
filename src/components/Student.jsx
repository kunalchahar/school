import React from 'react';

const Student = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Springdale Public School</h1>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Life at Springdale</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Extracurricular Activities</h3>
            <p className="mb-4">
              Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Clubs and Societies</h3>
            <p className="mb-4">
              Literary Society, Environmental Club, Astronomy Club, Coding Club
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>John Smith - National Level Math Olympiad Winner</li>
              <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
              <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Student Council</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>President:</strong> Amy Parker, Grade 12</li>
              <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
              <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Student;
