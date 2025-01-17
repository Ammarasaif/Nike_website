import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Tick from "@/app/assets/tick.png";
import Footer from "../components/Footer";

import Header from "../components/Header";
import {Inter} from "next/font/google";
const inter = Inter ({
    subsets:["latin"],
    weight:["700","400"]
})

export default function signIn(){
    return(
        <div> 
            <div><Header /></div>
             <div>
            <div className="w-full h-auto text-center">
                <Image  className ="text-center mt-16  ml-52 md:ml-[620px]" src={Logo} alt="logo" />
                   
                <h1 className={`${inter.className} font-bold text-[18px]  leading-[26px] text-center mt-6`}> YOUR ACCOUNT <br /> FOR EVERY THING <br /> NIKE </h1>

            </div>
            <div>
            <div className="mt-8 ml-20 md:ml-[480px]">
                    <input
                    type = "Email Address"
                    placeholder = "Email Address"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                </div>
                <div className="mt-4 ml-20 md:ml-[480px]">
                    <input
                    type = "Password"
                    placeholder = "Password"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                </div>
                <div className="flex ml-20 md:ml-[495px] mt-6">
                <Image src={Tick} alt="image"   />

                <h1 className={`${inter.className} text-[12px] mt-[2px] ml-2 leading-[14px] text-[#8D8D8D]`} >
                Keep me signed in 
                </h1>
                <h2 className={`${inter.className} text-[12px] mt-[2px] ml-10 leading-[14px] text-[#8D8D8D]`} >
                Forgotten your password?
                </h2>
                </div>
                <p className={`${inter.className} ml-20 md:ml-[510px]  mt-6 text-[12px] leading-[16px] text-[#8D8D8D]`}>
                By logging in, you agree to Nike's Privacy Policy <br  />  <span className="ml-20" >and Terms of Use.</span>
                </p>
                <button className={`${inter.className}  bg-black ml-20 md:ml-[490px] mt-4 h-[40px] w-[324px] text-[15px] leading-[17px] font-normal text-white text-center rounded-[3px] `}>
                   SIGN IN
                </button>
                <p className="text-[11px] mt-6 ml-48 md:ml-[570px] leading-[14px] text-[#8D8D8D]">
                Already a Member? <span className=" text-black font-medium  border-black border-b-[1px]"> Sign In.</span>
                </p>
            </div>
            </div>
          <div className="mt-7"><Footer /></div>
        </div>
    )
}