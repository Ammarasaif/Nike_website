import Image from "next/image";
import shoe1 from "@/app/assets/shoe1.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import shoe2 from "@/app/assets/shoe2.png"
import Card from "./Card";
import shoe3 from "@/app/assets/shoe3.png";
export default function BestAirMax (){
    return (
        <div>
             <div className="w-full h-[52px] mt-8 flex items-center justify-between">
                <div className="text-[22px] font-medium leading-[28px]">
                    Best Of Air Max
                </div>
                    <div className="text-[15px] font-medium leading-[24px] flex mr-5">
                    <h1 className=" mr-2 mt-[2px] hover:text-[18px] hover:font-semibold">Shop</h1>
                    <div className=" bg-[#F5F5F5] h-[30px] w-[30px] rounded-full text-gray-300 mr-3  hover:bg-slate-500 ">
                    <IoIosArrowBack className="mt-2 ml-2" />
                    </div>
                    <div className=" bg-[#F5F5F5] h-[30px] w-[30px] rounded-full hover:bg-slate-300 "/>
                    <IoIosArrowForward  className="mt-2 relative right-5 "/>
                    </div>
                
            </div>
             <div className="flex">
                <div className="w-full h-[400px] md:h-[540.36px]">
            <div className="h-[400px] w-[400px]">
                <Image src={shoe1} alt="ShoePic" />
             </div>
             <div className="h-[48px] w-[400px] flex  justify-between items-center">
                <h1 className="font-medium text-[15px] leading-[24px] ml-4">
                    Nike Air Max Pulse
                </h1>
                <h2 className="flex mr-4">
                <MdCurrencyRupee className="mt-1" /> <span>13 995</span>
                </h2>
             </div>
             <div className="text-[#757575] font-medium text-[15px] leading-[24px] ml-4 relative bottom-3">
                Women's Shoes
             </div>

               </div> 
               
           

          <div className="cursor-pointer hover:text-lg">
           <Card imageUrl={shoe2} heading="Nike Air Max Pulse" paragraph="Men's Shoes" span="13 995"/>
          </div>
          <div className="pl-8 cursor-pointer hover:text-lg">

            <Card imageUrl={shoe3} heading="Nike Air Max 97 SE" paragraph="Men's Shoes" span="16 995" />
          </div>
            
            
           </div> 
           </div>
        
    )
}