import React from 'react'

const About = () => {
  return (
    <>
    <div className='bg-slate-900 flex justify-center flex-col items-center h-screen' >
      <div className=' '>

      <div className='bg-slate-100 flex justify-center items-center h-32 w-72 gap-8 rounded-2xl' >
        <div>
        <img className='h-14 w-20' src='https://cdn-images-1.medium.com/max/254/1*eHdalKXpZrnlIkps0E2meA@2x.png' />
        </div>
        <div className='text-lg font-bold '>
          TailWind Css
          <p className='text-sm font-light'>by Ahmed Ilyas</p>
        </div>
        
      </div>

      </div>
      <button className='bg-blue-800 mt-2 w-72 hover:bg-violet-600 hover:text-white text-lg text-center font-medium' >Buy Now</button>
      <div className='text-center py-4'>
          <p className='text-white sm:text-rose-950 md:text-indigo-900 ' >ahmed baloch</p>
      </div>
    </div>
    </>
  )
}

export default About