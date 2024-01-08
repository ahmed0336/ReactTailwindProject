import React, { useEffect, useState } from 'react'
import Img1 from '../Rectangle 4272.png'
import Img2 from '../Information Technology-min.png'

const Header1 = () => {

   const [toggle, setToggle] = useState(false)
   const [mobileViewWidth,setmobileViewWidth]=useState(window.innerWidth)
   const handleResize = () => {
      setmobileViewWidth(window.innerWidth);
    };
    
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures this effect runs only once on mount
    
   const handleSubmit = () => {
      setToggle(!toggle)
   }


   return (
      <>
         {/* Navbar Section */}
         <nav className='bg-slate-300 flex w-full h-14 justify-around items-center sticky top-0' >

            <div>
               <p className='text-lg text-blue-700 font-bold' >PW Skills</p>
            </div>

            <div className=''>
               <ul className='md:flex justify-between items-end gap-4 hidden' >
                  <li className='text-black font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>Home</li>
                  <li className='text-black font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>About</li>
                  <li className='text-black font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>Contact</li>
                  <li className='text-black font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>Services</li>
               </ul>
            </div>

            <div className='bg-blue-950 p-2 text-white rounded-lg md:block hidden'>
               <button><span className='mr-2 cursor-pointer'>SignIn</span>/<span className='ml-2 cursor-pointer' >Logout</span> </button>
            </div>

            <button className='md:hidden' onClick={handleSubmit} >ToggleBTN</button>



         </nav>

         {
            toggle && mobileViewWidth <= 425 && (
               <>
               <div className='bg-gray-950 sticky top-14 w-full h-auto text-white px-4 py-4   transition duration-900 ease-in-out transform' >
               <ul className='flex flex-col justify-between  gap-4 ' >
                  <li className=' font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>Home</li>
                  <li className=' font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>About</li>
                  <li className=' font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>Contact</li>
                  <li className=' font-bold hover:text-white cursor-pointer hover:underline hover:decoration-black '>Services</li>
               </ul>
               </div>
               
               </>
            )
         }

         {/* Header Part */}
         <section className='bg-indigo-800 w-full h-auto flex flex-col-reverse md:flex-row justify-around  items-center ' >

            <div className='text-center md:w-[50%] mb-2 py-2' >
               <p className='uppercase text-white text-sm md:text-4xl font-bold my-2 ' >The industry requires <br /> advanced skills.</p>
               <p className='uppercase text-sm md:text-4xl font-bold my-2' >get it the smart way.</p>
            </div>
            <div className='w-full md:w-[50%]   ' >
               <img className=' h-full w-full object-cover' src='https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' />
            </div>
         </section>

         {/* New Section */}

         <div className='bg-slate-800 flex flex-col flex-wrap   gap-2 py-4 '  >

            {/* Title */}
            <div className='flex flex-col justify-center items-center mb-4' >
               <p className='text-white font-bold text-2xl md:text-4xl '>Our Products</p>
               <p className='border-b-4 border-yellow-400 w-36 text-center ml-4 mt-2 rounded-md'></p>
            </div>

            {/* Card Body */}
            <div className='flex flex-row justify-evenly flex-wrap'>

               <div className=' flex flex-col  h-auto w-52 border-gray-200 border-2 p-4 rounded-md mb-12'>
                  <img className='h-44 w-44' src={Img1} alt='icon1' />
                  <p className='text-gray-900 font-bold text-sm md:text-lg text-center'>PW Skills  Lab</p>
                  <p className='text-gray-600 font-bond  text-sm md:text-sm text-center'>SuperCharge Your project development with our  robust lab.</p>
               </div>

               <div className=' flex flex-col    h-auto w-52 border-gray-200 border-2 p-4 rounded-md mb-12'>
                  <img className='h-44 w-44' src={Img1} alt='icon1' />
                  <p className='text-gray-900 font-bold text-sm md:text-lg text-center'>PW Skills  Lab</p>
                  <p className='text-gray-600 font-bond  text-sm md:text-sm text-center'>SuperCharge Your project development with our  robust lab.</p>
               </div>

               <div className=' flex flex-col    h-auto w-52 border-gray-200 border-2 p-4 rounded-md mb-12'>
                  <img className='h-44 w-44' src={Img1} alt='icon1' />
                  <p className='text-gray-900 font-bold text-sm md:text-lg text-center'>PW Skills  Lab</p>
                  <p className='text-gray-600 font-bond  text-sm md:text-sm text-center'>SuperCharge Your project development with our  robust lab.</p>
               </div>

               <div className=' flex flex-col    h-auto w-52 border-gray-200 border-2 p-4 rounded-md mb-12'>
                  <img className='h-44 w-44' src={Img1} alt='icon1' />
                  <p className='text-gray-900 font-bold text-sm md:text-lg text-center'>PW Skills  Lab</p>
                  <p className='text-gray-600 font-bond  text-sm md:text-sm text-center'>SuperCharge Your project development with our  robust lab.</p>
               </div>

            </div>


         </div>

         {/* New Card Section */}

         <div className='bg-slate-800 flex flex-col flex-wrap   gap-2 py-4 '  >
            {/* one div */}
            <div className='flex flex-col items-center justify-center' >
               <p className='text-white text-lg md:text-4xl font-bold'>"Pure Hardwork, No Shortcuts!"</p>
               <p className='border-2 w-32 border-yellow-400 rounded-md mt-4' ></p>
            </div>

            {/* two div */}
            <div className='flex flex-row items-center justify-around flex-wrap  ' >

               <div className='flex flex-col items-center justify-center mb-12 ' >
                  <img className='w-44 h-44' src={Img2} alt='img1' />
                  <p className='text-slate-50 text-3xl font-bold'>600+</p>
                  <p className='text-stone-300 text-1xl md:text-2xl font-bold' >Different Courses</p>
               </div>

               <div className='flex flex-col items-center justify-center mb-12  ' >
                  <img className='w-44 h-44' src={Img2} alt='img1' />
                  <p className='text-slate-50 text-3xl font-bold'>601+</p>
                  <p className='text-stone-300 text-1xl md:text-2xl font-bold' >Different Courses1</p>
               </div>

               <div className='flex flex-col items-center justify-center mb-12 ' >
                  <img className='w-44 h-44' src={Img2} alt='img1' />
                  <p className='text-slate-50 text-3xl font-bold'>602+</p>
                  <p className='text-stone-300 text-1xl md:text-2xl font-bold' >Different Courses2</p>
               </div>


            </div>

         </div>

         {/* footer Part */}

         <footer className='w-full bg-emerald-100 flex flex-col md:flex-row px-12 justify-evenly py-12' >
            <div >
               <img className='h-14 w-14' src={Img2} />
               <p className='text-slate-950 text-sm font-bold' >Email : balochahmed823@gmail.com</p>
               <img className='h-14 w-14' src={Img1} />
            </div>
            <div className='flex flex-col mt-4 '  >
               <p className='text-zinc-900 text-2xl font-bold' >PW Skills</p>
               <p className='border-2 border-orange-700 rounded-md' ></p>
               <p className='text-gray-950 font-bold text-lg'>About</p>
               <p>Faqs</p>
            </div>
            <div className='flex flex-col mt-4 '>
               <p className='text-zinc-900 text-2xl font-bold' >PW Skills</p>
               <p className='border-2 border-orange-700 rounded-md' ></p>
               <p className='text-gray-950 font-bold text-lg'>About</p>
               <p>Faqs</p>
            </div>

            <div className='flex flex-col mt-4'  >
               <p className='text-zinc-900 text-2xl font-bold' >PW Skills</p>
               <p className='border-2 border-orange-700 rounded-md' ></p>
               <p className='text-gray-950 font-bold text-lg'>About</p>
               <p>Faqs</p>
            </div>



         </footer>



      </>
   )
}

export default Header1