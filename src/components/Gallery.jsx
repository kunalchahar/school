import React from 'react';

const Gallery = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Springdale Public School</h1>
        </div>
      </header>

      <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Photos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative">
                <img src="/path-to/sports_day.jpg" alt="Students participating in various sports events" className="w-full h-64 object-cover rounded-md shadow-md"/>
                <p className="absolute bottom-0 left-0 bg-black text-white text-sm p-2 w-full text-center">Students participating in various sports events.</p>
              </div>
              <div className="relative">
                <img src="/path-to/science_exhibition.jpg" alt="Students presenting their science projects" className="w-full h-64 object-cover rounded-md shadow-md"/>
                <p className="absolute bottom-0 left-0 bg-black text-white text-sm p-2 w-full text-center">Students presenting their science projects.</p>
              </div>
              <div className="relative">
                <img src="/path-to/cultural_fest.jpg" alt="Students performing in the cultural fest" className="w-full h-64 object-cover rounded-md shadow-md"/>
                <p className="absolute bottom-0 left-0 bg-black text-white text-sm p-2 w-full text-center">Students performing in the cultural fest.</p>
              </div>
              <div className="relative">
                <img src="/path-to/classroom.jpg" alt="A glimpse of our interactive classrooms" className="w-full h-64 object-cover rounded-md shadow-md"/>
                <p className="absolute bottom-0 left-0 bg-black text-white text-sm p-2 w-full text-center">A glimpse of our interactive classrooms.</p>
              </div>
              <div className="relative">
                <img src="/path-to/library.jpg" alt="Students reading and studying in the school library" className="w-full h-64 object-cover rounded-md shadow-md"/>
                <p className="absolute bottom-0 left-0 bg-black text-white text-sm p-2 w-full text-center">Students reading and studying in the school library.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Videos</h3>
            <div className="space-y-6">
              <div>
                <video controls className="w-full h-64 object-cover rounded-md shadow-md">
                  <source src="/path-to/school_tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="mt-2">Virtual tour of Springdale Public School.</p>
              </div>
              <div>
                <video controls className="w-full h-64 object-cover rounded-md shadow-md">
                  <source src="/path-to/annual_function.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="mt-2">Highlights from the Annual Function 2023.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Gallery;
