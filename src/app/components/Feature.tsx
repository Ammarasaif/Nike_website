import Image from "next/image";
import feature from "@/app/assets/feature image.png";


export default function Feature(){
    return(
        <div>
            <h1 className="font-medium  text-black text-[23px] leading-[28px] mt-3 ml-3">
               Featured
            </h1>
            <div className="mt-4">
                <Image src={feature} alt="not found" />
            </div>
            <div className="">
                <h1 className="font-medium  text-[25px] md:text-[54px] leading-[60px] text-center text-black md:mt-10">STEP INTO WHAT FEELS GOOD</h1>
                <p className=" text-[10px] md:text-[15px] font-normal leading-[24px] text-center md:mt-5"> Cause everyone should know the feeling of running in that perfect pair.</p>
            </div> 
             <div className="flex justify-center  mt-4 md:mt-6">
                <button className=" w-[156px] h-[44px] bg-black text-white font-medium text-[15px] leading-[24px] rounded-full text-center hover:font-bold"> Find Your Shoe </button>
            </div>
             
        </div>
    )
}