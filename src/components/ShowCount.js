import React from 'react';
import Counter from './Counter';

function ShowCount() {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-blue-600">We Are Increasing Business Success</h2>
            <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Counter targetNumber={100} label="Successfully Project Finished." />
          <Counter targetNumber={200} label="Years of experience with pride." />
          <Counter targetNumber={320} label="Ongoing Projects" />
          <Counter targetNumber={120} label="Colleagues & counting more daily" />
        </div>
      </div>
    </div>
  );
}

export default ShowCount;