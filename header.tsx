import Image from 'next/image';
import Logo from "@/app/assets/logo.png";

import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";



export default function Header (){
    return(
        <div className=''>
            <div className='h-[60px] flex items-center justify-between px-4 md:px-8 md:mt-3'>
            <div>
             <Image className=" ml-5" src={Logo} alt="Logo" />
            </div>
             <div>
                <ul className='hidden lg:flex space-x-6 ml-64 font-medium  text-[8px] md:text-[14px]'>
                    <li> New & Featured</li>
                    <li> Men</li>
                    <li> Women</li>
                    <li> Kids</li>
                    <li> Sale</li>
                    <li> SNKRS</li>
                </ul>
             </div>
             <IoIosSearch  className='relative left-[40px] sm:relative sm:left-[80px] md:relative md:left-[70px] md:top-2 '/>
             <div className='md:mt-[16px]'>
              <input
              type = "text"
              placeholder='Search'
              className=' w-[260px] h-[40px] md:w-[190px] md:h-[40px] bg-[#F5F5F5] rounded-full pl-8'/>
              </div>
              <div>
                <FaRegHeart className='md:mt-5' />
                </div>
                <div>
                <BiShoppingBag className='md:mt-5' />
                </div>

             
             </div>
             
        </div>
    )}
            