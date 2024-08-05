import React from 'react';
import image from '../../assets/image.png';

function TopResume() {
  return (
    <div className="flex flex-col md:flex-row w-3/4 items-center mx-auto">
      <div className="flex flex-col items-left md:w-1/2">
        <img
          src={image}
          alt="Person"
          className="w-32 h-32 rounded-full mb-4 md:hidden"
        />
        <h1 className="text-2xl font-bold text-left mb-2">
          Hi, I am John, <br />Creative Technologist
        </h1>
        <p className="text-left text-gray-600 mb-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button
          className="w-52 h-12 bg-red-500 text-white rounded-md"
        >
          Download Resume
        </button>
      </div>
      <div className="hidden md:block justify-center w-1/2">
      <div className="w-1/2 items-center mx-auto">
        <img
            src={image}
            alt="Person"
            className="w-32 h-32 rounded-full "
        />

      </div>
        
      </div>
    </div>
  );
}

export default TopResume;
