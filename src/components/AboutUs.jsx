import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Springdale Public School</h1>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            <strong>History:</strong> Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
          <p className="text-lg mb-4">
            <strong>Vision:</strong> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
          <p className="text-lg mb-4">
            <strong>Mission:</strong> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
          <p className="text-lg mb-4">
            <strong>Principal's Message:</strong> At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Infrastructure and Facilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg">State-of-the-art science and computer labs</li>
            <li className="text-lg">Spacious and well-equipped classrooms</li>
            <li className="text-lg">Library with a vast collection of books and digital resources</li>
            <li className="text-lg">Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
