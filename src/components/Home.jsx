import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './Footer';

const Home = () => {
  return (<>
    <div>
      <div className="bg-blue-100 p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Springdale Public School</h1>
        <p className="text-lg">Where we nurture young minds for a brighter future.</p>
      </div>
      <div className="my-8 mx-auto">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="h-full w-full">
          <div className="h-full w-full">
            <img className="h-full w-full object-cover" src="/images/Blog6.jpg" alt="Annual Sports Day" />
            <p className="legend">Annual Sports Day - Celebrating Excellence in Sports</p>
          </div>
          <div className="h-full w-full">
            <img className="h-full w-full object-cover" src="/images/most-important-festivals-latin-america.jpg" alt="Science Exhibition" />
            <p className="legend">Science Exhibition - Showcasing Student Innovations</p>
          </div>
          <div className="h-full w-full">
            <img className="h-full w-full object-cover" src="/images/spDSCN0430.jpg" alt="Cultural Fest" />
            <p className="legend">Cultural Fest - Embracing Diversity and Creativity</p>
          </div>
        </Carousel>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Home;
