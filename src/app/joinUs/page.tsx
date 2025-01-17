import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import {Inter} from "next/font/google";
import Rectangle from "@/app/assets/Rectangle.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter ({
    subsets:['latin'],
    weight:["700","400"]
})
export default function JoinUs (){
    return (
        <div>
            <div>
                <Header />
            </div>
        <div className="w-full py-5 md:py-7 h-auto border-l-2 shadow-2xl ml-12 md:ml-[400px]">
            <div className="w-[324px] h-[182px]">
                <Image  className ="mt-7 ml-[130px]"   src={Logo} alt="logo" />
                <h1 className={`${inter.className} ml-[60px] mt-7 font-bold leading-{26px] text-[18px]} `}>
                   BECOME A NIKE MEMBER 
                </h1>
                <p className={`${inter.className}  ml-[35px] mt-7 items-center text-[14px] font-normal leading-[26px] text-[#8D8D8D]`}>
                Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community.
                </p>

            </div>
            <div>
                <div className="mt-3 ml-4">
                    <input
                    type = "email"
                    placeholder = "Email address"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                </div>
                <div className="mt-3 ml-4">
                    <input
                    type = "password"
                    placeholder = "Password"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                </div>
                <div className="mt-3 ml-4">
                    <input
                    type = "First Name"
                    placeholder = "First Name"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                </div>
                <div className="mt-3 ml-4">
                    <input
                    type = "Last Name"
                    placeholder = "Last Name"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                </div>
                <div className="mt-3 ml-4">
                    <input
                    type = "Date of Birth"
                    placeholder = "Date of Birth"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                     <p className={`text-[11px] leading-[13.31px] ${inter.className} font-normal text-[#8D8D8D] mt-4 ml-4`}>
                     Get a Nike Member Reward every year on your Birthday.
                     </p>
                </div>
                <div className="mt-3 ml-4">
                    <input
                    type = "Country"
                    placeholder = "Country"
                    className={`${inter.className} h-[40px] pl-2  w-[324px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                     
                </div>
                <div className="mt-3 ml-4">
                    <input
                    type = "Male"
                    placeholder = "Male"
                    className={`${inter.className} h-[40px] pl-2  w-[153.89px] ml-3 border border-gray-200 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px]`}
                     />
                     <input
                     type ="Female"
                     placeholder=" Female" 
                     className={`${inter.className} h-[40px] w-[153.89px] border-gray-200 ml-3 shadow-lg font-normal text-[#8D8D8D] text-[14px] leading-[17px] `} />
                 
                </div>
                <div className="flex ml-8 mt-4">
                 <Image src={Rectangle} alt="pic" />
                 <p className={`${inter.className} text-[11px] leading-[14px] ml-3 text-[#8D8D8D] `}>
                 Sign up for emails to get updates from Nike on < br /> products, offers and your Member benefits
                 </p>
                </div>
                <p className={`${inter.className} text-[12px] mt-6 ml-8 font-normal text-[#8D8D8D] leading-[16px]`}>
                By creating an account, you agree to Nike's <span className="border-b-2 text-[#8D8D8D]">Privacy</span> <br /> <span className="border-b-2 text-[#8D8D8D] ml-14" >Policy</span> and  <span className="border-b-2 text-[#8D8D8D]" >Terms of Use</span>
                </p>
                <div>
                <button className={`${inter.className}  bg-black ml-6 mt-4 h-[40px] w-[324px] text-[15px] leading-[17px] font-normal text-white text-center rounded-[3px] `}>
                   JOIN US
                </button>
                <p className="text-[11px] mt-6 ml-28 leading-[14px] text-[#8D8D8D]">
                Already a Member? <span className=" text-black font-medium  border-black border-b-[1px]"> Sign In.</span>
                </p>
                </div>
            </div>
            <div>
            
            </div>
            
            
            
        </div>
        <div>
         <Footer />
      </div>
        </div>
        
    )
}