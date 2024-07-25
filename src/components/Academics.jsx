import React from 'react';

const Academics = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Springdale Public School</h1>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Academics</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Curriculum</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Primary (Grades 1-5)</h4>
                <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Secondary (Grades 6-10)</h4>
                <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Senior Secondary (Grades 11-12)</h4>
                <div>
                  <strong>Science Stream:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                    <li>Mathematics</li>
                    <li>Computer Science</li>
                    <li>English</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <strong>Commerce Stream:</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Accountancy</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>Mathematics</li>
                    <li>English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Teaching Methodologies</h3>
            <p>"We use a blend of traditional and modern teaching techniques to cater to different learning styles."</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Educational Resources</h3>
            <p>"Digital classrooms, interactive learning modules, and access to online educational platforms."</p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Academics;
