import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import working from './assets/images/illustration-working.svg'
import brand from './assets/images/icon-brand-recognition.svg'
import SingleFeature from "./SingleFeature.jsx";
import records from './assets/images/icon-detailed-records.svg'
import custom from './assets/images/icon-fully-customizable.svg'
import boost from './assets/images/bg-boost-mobile.svg'
import insta from './assets/images/icon-instagram.svg'
import facebook from './assets/images/icon-facebook.svg'
import twitter from './assets/images/icon-twitter.svg'
import pint from './assets/images/icon-pinterest.svg'
import logo from './assets/images/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import shorten from './assets/images/bg-shorten-mobile.svg'


function App() {
  const [count, setCount] = useState(0)

  return (<div className='overflow-hidden'>
        <div>
          <div className='lg:flex lg:mx-64'>
          <div className='flex justify-between mx-5 mt-7 lg:mt-10 lg:mr-8 lg:mx-0'>
            <img src={logo}/>
            <GiHamburgerMenu className='text-2xl lg:hidden'/>

          </div>
          <div className='lg:flex hidden lg:visible lg:w-full lg:justify-between lg:mt-7'>
            <div className='lg:flex'>
            <div className='mr-6 mt-3'>Features</div>
            <div className='mr-6 mt-3'>Pricing</div>
            <div className='mt-3'>Resources</div>
            </div>
            <div className='lg:flex'>
            <div className='mr-7 mt-3'>Login</div>
            <div>
            <div className='bg-cyan-400 px-5 py-2 rounded-full mt-1'>Signup</div>
            </div>
            </div>
          </div>
          </div>


          <div className='lg:flex lg:justify-between lg:flex-row-reverse lg:mx-64'>
          <div>
            <img src={working} className='scale-125 lg:ml-80 ml-24 mt-20 h-max'/>
          </div>
          <div>
          <div className='mt-16 text-center mx-6 lg:mx-0 text-5xl lg:text-[70px] lg:text-left font-black  lg:mt-20'>More than just shorter links</div>
          <div className='text-center mx-6 lg:mx-0 text-xl lg:text-2xl font-light mt-3 lg:text-left'>Build your brand's recognition and get detailed
            insights on how your links are performing.
          </div>
          <div className='bg-cyan-400 text-white w-max mx-auto lg:mx-0 font-bold text-2xl py-2 px-9 rounded-full mt-7'>Get
            Started
          </div>
          </div>
        </div>
        </div>

    <div className='bg-[#3b3054] mx-6 pb-6 rounded-xl relative top-20 lg:mx-64'>
        <div className='bg-no-repeat bg-right px-6 bg-[url("./assets/images/bg-shorten-mobile.svg")]  lg:flex lg:py-5 lg:px-11'>
        <input placeholder='Shorten a link here...' className='text-xl px-3 outline-0 py-3 bg-white w-full rounded-lg mb-1 mt-6 lg:w-10/12'/>
        <div className='bg-cyan-400 text-white mx-auto font-bold text-xl py-3 text-center rounded-lg lg:mt-6 lg:mb-1 lg:ml-2 lg:w-2/12'>Shorten It!</div>
        </div>
    </div>


        <div className='bg-[#bfbfbf] bg-opacity-30 py-10 pt-36'>
          <div className='text-center font-bold text-3xl'>Advanced Statistics</div>
          <div className='mb-12 text-lg mx-6 text-center mt-3 font-light'>Tracking how your links are performing across
            the web with our advanced statistics
            dashboard
          </div>
          <div className='lg:flex lg:justify-center lg:mt-24 lg:mb-20 lg:mx-64'>
           <div className='lg:w-1/3'>
          <SingleFeature
              para="Boost your brand recognition with each click. Generic links don't mean a thing, Branded links help instill confidence in your content."
              header='Brand Recognition' img={brand}/>
           </div>
            <div className='min-w-1 max-w-2 mx-auto lg:mx-0 bg-cyan-400 min-h-20 lg:min-w-16 lg:max-w-16 lg:max-h-2 lg:min-h-1 lg:my-auto'></div>


            <div className='lg:w-1/3 lg:mt-10'>
          <SingleFeature
              para="Boost your brand recognition with each click. Generic links don't mean a thing, Branded links help instill confidence in your content."
              header='Brand Recognition' img={records}/>
            </div>
          <div className='min-w-1 max-w-2 mx-auto lg:mx-0 bg-cyan-400 min-h-20 lg:min-w-16 lg:max-w-16 lg:max-h-2 lg:min-h-1 lg:my-auto'></div>

          <div className='lg:w-1/3 lg:mt-20'>
          <SingleFeature
              para="Boost your brand recognition with each click. Generic links don't mean a thing, Branded links help instill confidence in your content."
              header='Brand Recognition' img={custom}/>
          </div>
          </div>
        </div>
        <div className='bg-[#3b3054]'>
          <div className='bg-[url("./assets/images/bg-boost-mobile.svg")] bg-auto bg-no-repeat bg-center pb-20'>
            <div className='text-white text-center text-3xl font-bold pt-16 pb-6'>Boost your links today</div>
            <div className='bg-cyan-400 text-white w-max mx-auto font-bold text-2xl py-3 px-9 rounded-full'>Get
              Started
            </div>
          </div>
        </div>
        <div className='bg-[#232127]'>
          <div className='lg:flex lg:justify-between lg:mx-64 lg:py-16'>
            <div className='text-white text-center font-black text-4xl pb-10 pt-5'>Shortly</div>

            <div className='lg:flex lg:justify-between'>
            <div className='text-center lg:text-left text-white pt-4 lg:mr-16'>
              <div className='font-semibold pb-3'>Features</div>
              <div>Link Shortening</div>
              <div>Branded Links</div>
              <div>Analytics</div>
            </div>
            <div className='text-center lg:text-left text-white pt-4 lg:mr-16'>
              <div className='font-semibold pb-3'>Resources</div>
              <div>Blog</div>
              <div>Developers</div>
              <div>Support</div>
            </div>
            <div className='text-center lg:text-left text-white pt-4 lg:mr-16'>
              <div className='font-semibold pb-3'>Company</div>
              <div>About</div>
              <div>Our Team</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
            <div className='flex justify-center mt-7 pb-10 lg:ml-20'>
              <img src={facebook} className='px-3 lg:max-h-7'/>
              <img src={twitter} className='px-3 lg:max-h-7'/>
              <img src={pint} className='px-3 lg:max-h-7'/>
              <img src={insta} className='px-3 lg:max-h-7'/>
            </div>
          </div>
        </div>

        </div>


      </div>
  )
}

export default App
