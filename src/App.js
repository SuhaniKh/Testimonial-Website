import React from 'react'
import Testimonial from './Components/Testimonial'
import reviews from './data'
const App = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews = {reviews}/>
        </div>
    </div>
  )
}

export default App

