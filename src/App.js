import React from 'react';
import Boxs from './boxs.js'
import background from './heartBackground.svg';

function App() {
  return (
    <div className="bg-neutral-900 relative h-screen w-screen">
      <div className="h-full w-full absolute flex justify-start items-center z-1 overflow-hidden">
        <img src={background} className="h-[85vh] w-[250vh] relative -left-[35vw] mt-18" />
      </div>


      <div className="flex flex-col relative z-100 h-full w-full justify-center items-center px-10">
        <div className="flex flex-col items-start w-full mt-18">
          <h1 className="text-white text-4xl font-style: Ariel mt-[-13 vw] ml-4 vw">
            hellocare is for everyone
          </h1>
          <p className='text-white/50 mt-6 max-w-[60vw] text-left ml-4 vw'>
            hellocare platform consists of software, hardware and Artificial Intelligence (AI) that <br />
            provides turnkey solutions for Hospitals, Home Care and Primary Care
          </p>
        </div>

        <div className="ml-[-25vw] mt-5">
          <Boxs />
        </div>

      </div>

    </div>
  );
}


export default App;
