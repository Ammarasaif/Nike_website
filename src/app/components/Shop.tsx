import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Men from "@/app/assets/men.png";
import Card1 from "./Card1";
import { MdCurrencyRupee } from "react-icons/md";
import Men2 from "@/app/assets/men2.png";
import Girl from "@/app/assets/girl.png";
import Girl2 from "@/app/assets/girl2.png";



export default function Shop (){
    return(
        <div className="w-full h-auto px-6 py-6">
            <div className="text-[23px] leading-[28px] font-medium ">
                Gear Up
            </div>
            <div className="hidden md:flex justify-between items-center mb-3">
              <div className="flex pl-[350px]">
              <div className="flex md:mt-8 justify-end items-end font-medium text-[15px] ">
               <h1 className=" mr-5 md:mb-3">Shop Men's</h1>
            <div className="bg-[#F5F5F5] h-[48px] w-[48px] rounded-full mt-8 pt-4 mr-4"><IoIosArrowBack       className="ml-4 text-lg"/></div>
             <div className="bg-[#E5E5E5] h-[48px] w-[48px] rounded-full pt-4 mr-8" ><IoIosArrowForward  className="ml-4 text-lg"/></div>
            </div>
            </div>
            <div className="flex">
              <div className="flex mt-8 justify-end items-end font-medium text-[15px] ">
               <h1 className=" mr-5 md:mb-3">Shop Women's</h1>
            <div className="bg-[#F5F5F5] h-[48px] w-[48px] rounded-full mt-8 pt-4 mr-4"><IoIosArrowBack       className="ml-4 text-lg"/></div>
             <div className="bg-[#E5E5E5] h-[48px] w-[48px] rounded-full pt-4 mr-8" ><IoIosArrowForward  className="ml-4 text-lg"/></div>
            </div>
            </div>

            
            </div>

            <div className=" w-full h-auto flex-row md:flex justify-between items-center">
            <div className="flex">
                <div className=" h-[200px] w[200px] ">
                    <Image  className="h-[200px] w-[350px]" src={Men} alt="man" />
                    <div>
                        <div className=" hidden md:flex items-center text-[13px]  font-semibold leading-[24px] text-black">
                        <h1 className="mt-2">Nike Dri-FIT ADV TechKnit Ultra</h1> <span className="md:relative md:left-9 md:bottom-2"><MdCurrencyRupee className="md:relative md:top-[20px] md:right-4" /> 3 895</span>
                        </div>
                        <p className="text-[#757575] hidden sm:flex font-normal text-[16px]">Men's Short-Sleeve  <br />Running Top</p>
                    </div>
                </div>
                <Card1 imageUrl={Men2} heading="Nike Dri-FIT Challenger" paragraph="Men's 18cm (approx.) 2-" br="in-1 Versatile Shorts" span="2 495"/>
            </div>
            <div className="flex">
                <div>
                    <Card1 imageUrl={Girl} heading="Nike Dri-FIT ADV Run Division" paragraph="Women's Long-Sleeve" br="Running Top" span="5 295"  />
                </div>
                <div>
                    <Card1 imageUrl={Girl2} heading="Nike Fast" paragraph="Women's Mid-Rise 7/8 Running " br="Leggings with Pockets" span="3 795"  />
                </div>
            </div>
            </div>
        </div>
    )
}