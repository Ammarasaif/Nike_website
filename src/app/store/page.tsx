import Image from "next/image";
import Filter from "@/app/assets/filter icon.png";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../components/Header";
import Footer from "../components/footer";
import { FaRegSquare } from "react-icons/fa6";
import shoRec from "@/app/assets/shoRec.png";
import Card3 from "../components/Card3";
import shoeimage2 from "@/app/assets/shoeimage2.png";
import shoeimage3 from "@/app/assets/shoeimage3.png";
import shoeimage4 from "@/app/assets/shoeimage4.png";
import shoeimage5 from "@/app/assets/shoeimage5.png";
import shoeimage6 from "@/app/assets/shoeimage6.png";
import shoeimage7 from "@/app/assets/shoeimage7.png";
import shoeimage8 from "@/app/assets/shoeimage8.png";
import shoeimage9 from "@/app/assets/shoeimage9.png";
import shoeimage10 from "@/app/assets/shoeimage10.png";
import shoeimage11 from "@/app/assets/shoeimage11.png";
import shoeimage12 from "@/app/assets/shoeimage12.png";
import shoeimage13 from "@/app/assets/shoeimage13.png";
import shoeimage14 from "@/app/assets/shoeimage14.png";
import shoeimage15 from "@/app/assets/shoeimage15.png";

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
            <Image src={shoRec}  alt="image"/>
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
            <Card3 imageUrl={shoeimage2} heading="just In" h2="Nike Court Vision Low Next Nature" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 4 995.00"/></div>
            <div><Card3 imageUrl={shoeimage3} heading="Just In" h2="Nike Air Force 1 PLT.AF.ORM" h3="Women's Shoes" span="1 Colour" paragraph="MRP : ₹ 8 695.00" /></div>
            <div className=" mt-16"> <Card3 imageUrl={shoeimage4} heading="Just In" h2="Nike Air Force 1 React" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 13 295.00"   /></div>
            <div className=" mt-16">
                <Card3 imageUrl={shoeimage5} heading="Promo Exclusion" h2="Air Jordan 1 Elevate Low" h3="Women's Shoes"
                span="1 Colour" paragraph="MRP : ₹ 11 895.00" />
            </div>
            <div className=" mt-16">
                <Card3 imageUrl={shoeimage6} heading="Just In" h2="Nike Standard Issue" h3="Women's Basketball Jersey"
                span="1 Colour" paragraph="MRP : ₹ 2 895.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={shoeimage7} heading="Promo Exclusion" h2="Nike Dunk Low Retro SE" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 9 695.00" />
            </div>
            <div className="mt-16">
                <Card3  imageUrl={shoeimage8} heading="Sustainable Materials" h2="Nike Dri-FIT UV Hyverse" h3="Men's Short-Sleeve Graphic Fitness Top" span="1 Colour" paragraph="MRP : ₹ 2 495.00" />
            </div>
            <div className="mt-16">
                <Card3  imageUrl={shoeimage9} heading="Just In" h2="Nike Court Vision Low" h3="Men's Shoes" span="1 Colour" paragraph="MRP : ₹ 5 695.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={shoeimage10} heading="Just In" h2="Nike Dri-FIT Ready" h3="Men's Short-Sleeve Fitness Top" span="3 Colours" paragraph="MRP : ₹ 2 495.00" />
            </div>
            <div className="mt-16">
                <Card3  imageUrl={shoeimage11} heading="Just In" h2="Nike One Leak Protection: Period" h3="Women's Mid-Rise 18cm (approx.) Biker Shorts" span="2 Colours" paragraph="MRP : ₹ 3 395.00"/>
            </div>
            <div className="mt-16">
                <Card3 imageUrl={shoeimage12} heading="Just In" h2="Nike Air Force 1 LV8 3" h3="Older Kids' Shoe" span="1 Colour" paragraph="MRP : ₹ 7 495.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={shoeimage13} heading="Just In" h2="Nike Blazer Low Platform" h3="Women's Shoes" span="1 Colour" paragraph="MRP : ₹ 8 195.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={shoeimage14} heading="Just In" h2="Nike Air Force 1 '07" h3="Women's Shoe" span="2 Colours" paragraph="MRP : ₹ 8 195.00" />
            </div>
            <div className="mt-16">
                <Card3 imageUrl={shoeimage15} heading="Just In" h2="Nike Pro Dri-FIT" h3="Men's Tight-Fit Sleeveless Top" span="1 Colour" paragraph="MRP : ₹ 1 495.00" />
            </div>


            </div>
               </div>
            </div>
           <Footer />
        </div>
    )
}