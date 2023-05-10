import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = ({reviews}) => {

  const[index , setIndex] = useState(0);

  function leftShiftHandler(){
    if(index!==0){
      setIndex(index-1);
    }
    else{
      const n = reviews.length;
      setIndex(n-1)
    }
  }

  function RightShiftHandler(){
    const n = reviews.length;
    if(index!==n-1){
      setIndex(index+1);
    }
    else{
      setIndex(0)
    }
  }

  function surpriseHandler(){
    const min = 0;
    const max = reviews.length-1;
    let rand = Math.floor(Math.random() * (max-min));

    setIndex(rand);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl rounded-md">
      <Card review={reviews[index]}/>
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center">
        <button 
        onClick={leftShiftHandler}
        className="hover:text-violet-500">
          <FiChevronLeft />
        </button>
        <button 
        onClick={RightShiftHandler}
        className="hover:text-violet-500">
          <FiChevronRight />
        </button>
      </div>

      <div 
        onClick={surpriseHandler}
      className="">
        <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg mt-5">Surprise Me</button>
      </div>

    </div>
  )
}

export default Testimonial
