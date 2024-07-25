import React from 'react';

const Admission = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Springdale Public School</h1>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Admissions</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
            <p className="mb-4">
              Admission forms are available for download. Submit the completed form along with required documents at the school office.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Admission Criteria</h3>
            <p className="mb-4">
              Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Admission Form Availability:</strong> March 1st</li>
              <li><strong>Last Date for Submission:</strong> March 31st</li>
              <li><strong>Entrance Test:</strong> April 15th</li>
              <li><strong>Announcement of Results:</strong> April 30th</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Download Admission Forms</h3>
            <a
              href="/path-to-admission-form.pdf"
              download
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Download Admission Form
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Admission;
