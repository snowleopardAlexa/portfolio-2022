import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#333399] text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-lg">
       <p className="font-Roboto">snowleopardAlexa</p>
        {/* menu */}
        <div className="hidden md:flex">
            <ul className="hidden md:flex">
                <li className="hover:text-[#ff00cc] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Home</li>
                <li className="hover:text-[#ff00cc] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">About</li>
                <li className="hover:text-[#ff00cc] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Projects</li>
                <li className="hover:text-[#ff00cc] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Technologies</li>
                <li className="hover:text-[#ff00cc] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Contact</li>
            </ul>
        </div>
        {/* hamburger menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={20} color="#ff00cc"/> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#333399] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl hover:text-[#ff00cc]">Home</li>
            <li className="py-6 text-4xl hover:text-[#ff00cc]">About</li>
            <li className="py-6 text-4xl hover:text-[#ff00cc]">Projects</li>
            <li className="py-6 text-4xl hover:text-[#ff00cc]">Technologies</li>
            <li className="py-6 text-4xl hover:text-[#ff00cc]">Contact</li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="/">
               LinkedIn <FaLinkedin size={30} />
              </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#232526]">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="/">
               Github <FaGithub size={30} />
              </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#dd1818]">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="/">
               Gmail <SiGmail size={30} />
              </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#833ab4]">
              <a 
               className="flex justify-between items-center w-full text-gray-300" 
               href="/">
               Resume <BsFillPersonLinesFill size={30} />
              </a>
          </li>
        </div>
    </div>
  )
}

export default Navbar