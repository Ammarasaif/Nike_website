import Link from "next/link";
import Image from 'next/image';
import Vector from "@/app/assets/Vector (2).png";
import Logo from "@/app/assets/logo.png";

export default function Navbar (){
    return (
        <div>
            <div className='h-[36px] w-full flex justify-between items-center px-8 bg-[#F5F5F5]'>
                <div>
                    <Image src={Vector} alt="Vector" />
                </div>
                <div>
                    <p className=' hidden sm:flex-1 md:flex text-[13px] leading-[26px] font-medium ml-36'>Skip to main content</p>
                </div>
                <div className='flex'>
                    <ul className='flex gap-[15.38px] font-sans font-medium text-[11px] leading-[14px]'>

                        <li className="hover:text-[15px]">
                         <Link href="/store">Find a Store <span className='border-r-[2px] border-slate-700 relative pl-5'></span></Link>
                        </li>

                        <li className="hover:text-[15px] cursor-pointer"><Link href="/help">Help </Link><span className='border-r-[2px] border-slate-700 pl-5'> </span> </li>

                        <li className="hover:text-[15px]"> 
                        <Link href="/joinUs">Join Us </Link> <span className='border-r-[2px] border-slate-700 pl-5'></span>
                        </li>

                        <li className="hover:text-[15px]">  <Link href="/signIn" >Sign In</Link></li>
                    </ul>
                </div>
            </div>
        
            
        </div>
    )
}
    