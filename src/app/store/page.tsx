import Image from "next/image";
import Filter from "@/app/assets/filter icon.png";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaRegSquare } from "react-icons/fa6";
import ShoRec from "@/app/assets/ShoRec.png";
import Card3 from "../components/Card3";
import Shoeimage2 from "@/app/assets/Shoeimage2.png";
import Shoeimage3 from "@/app/assets/Shoeimage3.png";
import Shoeimage4 from "@/app/assets/Shoeimage4.png";
import Shoeimage5 from "@/app/assets/Shoeimage5.png";
import Shoeimage6 from "@/app/assets/Shoeimage6.png";
import Shoeimage7 from "@/app/assets/Shoeimage7.png";
import Shoeimage8 from "@/app/assets/Shoeimage8.png";
import Shoeimage9 from "@/app/assets/Shoeimage9.png";
import Shoeimage10 from "@/app/assets/Shoeimage10.png";
import Shoeimage11 from "@/app/assets/Shoeimage11.png";
import Shoeimage12 from "@/app/assets/Shoeimage12.png";
import Shoeimage13 from "@/app/assets/Shoeimage13.png";
import Shoeimage14 from "@/app/assets/Shoeimage14.png";
import Shoeimage15 from "@/app/assets/Shoeimage15.png";

export default function (){

    const items =["Shoes",
                        "Sports Bras",
                        "Tops & T-Shirts",
                        "Hoodies & Sweatshirts",
                        "Jackets",
                        "Trousers & Tights",
                        "Shorts",
                        "Tracksuits",
                        "Jumpsuits & Rompers",
                        "Skirts & Dresses",
                        "Socks",]
    return(
        <div>
            <Header />
            <div className="w-full h-auto px-5">
               <div className="flex items-center justify-between">
                <h1 className="text-[24px] leading-[31.2px] font-medium  ">New (500)</h1>
                <ul className="flex justify-between items-center space-x-8">
                    <li className="flex items-center justify-between text-[16px] leading-[28px]">Hide Filters <Image className="ml-2" src={Filter} alt="filter icon" /></li>
                    <li className="flex items-center justify-between text-[16px] leading-[28px]">Sort By <IoIosArrowDown className="ml-2" /></li>
                 </ul>
              </div>

              {/* second portion */}
               <div className=" h-auto flex pb-72 items-center justify-between">
                <div>
                <ul className="text-[15px] leading-[21.6px] border-gray-500 border-r-8 font-semibold space-y-2 ml-6 ">
                    {items.map ((items, index) => (
                        <li
                        key={index}> {items }</li>
                    ))}
                </ul>
                <h1 className="test-[16px] leading-[21.6px] font-semibold ml-6 mt-4 ">
                    Accessories <br /> & Equipments
                </h1>
                <div className=" ml-6 mt-8 border-t-2 w-[192px] h-[163px]" >
                <h2 className=" text-[16px] leading-[26px] font-semibold mt-2  "> 
                    Gender
                    <ul className=" ml-6 mt-6">
                        <li className="flex font-normal"><FaRegSquare className="mr-4 "  />Men</li>
                        <li className="flex font-normal"><FaRegSquare className="mr-4 " />Women</li>
                        <li className="flex font-medium"><FaRegSquare className="mr-4 " />Unisex</li>
                    </ul>
                </h2>
                </div>
                <div className=" ml-6 mt-8 border-t-2  h-[163px]" >
                <h2 className=" text-[16px] leading-[26px] font-semibold mt-2  "> 
                    Kids
                    <ul className=" ml-6 mt-6">
                        <li className="flex font-medium"><FaRegSquare className="mr-4 "  />Boys</li>
                        <li className="flex font-medium"><FaRegSquare className="mr-4 " />Girls</li>
                        
                    </ul>
                </h2>
                </div>
                <div className=" ml-6 mt-2 border-t-2  h-[163px]" >
                <h2 className=" text-[16px] leading-[26px] font-semibold mt-2  "> 
                    Shop By Price
                    <ul className=" ml-6 mt-6">
                        <li className="flex font-medium"><FaRegSquare className="mr-4 "  />Under ₹ 2 500.00</li>
                        <li className="flex font-medium"><FaRegSquare className="mr-4 " />₹ 2 501.00 - ₹ </li>
                        
                    </ul>
                </h2>
                </div>
                </div>
              
               {/* card section */}
               
            
            <div className=" w-[1440px]  px-8 space-x-4 h-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
            <div className="ml-4">
            <Image src={ShoRec}  alt="image"/>
            <h1 className="text-[15px] leading-[28px] font-medium text-[#9E3500]">
                Just In
            </h1>
            <h2 className="text-[15px] leading-[24px] font-medium">
            Nike Air Force 1 Mid '07
            </h2>
            <h3 className="text-[15px] leading-[24px] font-normal text-[#757575]">
            Men's Shoes
            </h3>
            <span className="text-[15px] leading-[24px] font-normal text-[#757575]"> 1 Colour </span>
            <p>
            MRP : ₹ 10 795.00
            </p>

            </div>
            <div>
            <Card3 imageUrl={Shoeimage2} heading="just In" h2="Nike Court Vision Low Next Nature" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 4 995.00"/></div>
            <div><Card3 imageUrl={Shoeimage3} heading="Just In" h2="Nike Air Force 1 PLT.AF.ORM" h3="Women's Shoes" span="1 Colour" paragraph="MRP : ₹ 8 695.00" /></div>
            <div className=" mt-16"> <Card3 imageUrl={Shoeimage4} heading="Just In" h2="Nike Air Force 1 React" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 13 295.00"   /></div>
            <div className=" mt-16">
                <Card3 imageUrl={Shoeimage5} heading="Promo Exclusion" h2="Air Jordan 1 Elevate Low" h3="Women's Shoes"
                span="1 Colour" paragraph="MRP : ₹ 11 895.00" />
            </div>
            <div className=" mt-16">
                <Card3 imageUrl={Shoeimage6} heading="Just In" h2="Nike Standard Issue" h3="Women's Basketball Jersey"
                span="1 Colour" paragraph="MRP : ₹ 2 895.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={Shoeimage7} heading="Promo Exclusion" h2="Nike Dunk Low Retro SE" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 9 695.00" />
            </div>
            <div className="mt-16">
                <Card3  imageUrl={Shoeimage8} heading="Sustainable Materials" h2="Nike Dri-FIT UV Hyverse" h3="Men's Short-Sleeve Graphic Fitness Top" span="1 Colour" paragraph="MRP : ₹ 2 495.00" />
            </div>
            <div className="mt-16">
                <Card3  imageUrl={Shoeimage9} heading="Just In" h2="Nike Court Vision Low" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 5 695.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={Shoeimage10} heading="Just In" h2="Nike Dri-FIT Ready" h3="Men's Short-Sleeve Fitness Top" span="3 Colours" paragraph="MRP : ₹ 2 495.00" />
            </div>
            <div className="mt-16">
                <Card3  imageUrl={Shoeimage11} heading="Just In" h2="Nike One Leak Protection: Period" h3="Women's Mid-Rise 18cm (approx.) Biker Shorts" span="2 Colours" paragraph="MRP : ₹ 3 395.00"/>
            </div>
            <div className="mt-16">
                <Card3 imageUrl={Shoeimage12} heading="Just In" h2="Nike Air Force 1 LV8 3" h3="Older Kids' Shoe" span="1 Colour" paragraph="MRP : ₹ 7 495.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={Shoeimage13} heading="Just In" h2="Nike Blazer Low Platform" h3="Women's Shoes" span="1 Colour" paragraph="MRP : ₹ 8 195.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={Shoeimage14} heading="Just In" h2="Nike Air Force 1 '07" h3="Women's Shoe" span="2 Colours" paragraph="MRP : ₹ 8 195.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={Shoeimage15} heading="Just In" h2="Nike Pro Dri-FIT" h3="Men's Tight-Fit Sleeveless Top" span="1 Colour" paragraph="MRP : ₹ 1 495.00" />
            </div>


            </div>
               </div>
            </div>
           <Footer />
        </div>
    )
}