import Image from "next/image";
import Pic from "@/app/assets/essential image.png";
export default function Essentials (){
    return (
        <div className="mt-20">
            <div className="font-medium leading-[28px] text-[22px]">
               <h1 className="ml-5">Don't Miss</h1>
             <Image  className="mt-6"  src={Pic} alt="Picture" />
            </div>
            <div>
            <h2 className="font-medium text-[30px] md:text-[52px] leading-[60px] text-black text-center md: mt-6">FLIGHT ESSENTIALS</h2>
            <p className="font-normal text-[13px] md:text-[15px] leading-[24px] text-black text-center md:mt-6">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            </div>
            <div className="text-center">
                <button className="w-[87px] h-[34px] bg-black text-white text-center rounded-full mt-2 md:mt-6">
                    Shop
                </button>
            </div>
        </div>
    )
}