import Image from "next/image";
import Men from "@/app/assets/for men.png";
import Women from "@/app/assets/for women.png";
import kids from "@/app/assets/for kids.png";
export default function Category (){
    return(
        <div className="w-full h-auto px-4  md:mt-8">
            <h1 className="text-[23px] font-medium  ml-5 leading-[28px]">The Essentials</h1>
            <div className=" flex justify-between items-center cursor-pointer px-5 space-x-3 md:mt-4">
                 
                <div className="h-[400px] w-[450px]"><Image src={Men} alt="women" /></div>
                <div className="h-[400px] w-[450px]"><Image src={Women} alt="kids" /></div>
                <div className="h-[400px] w-[450px]"><Image src={kids} alt="kids" /></div>

            
            </div>
            {/* lists */}

            <div className=" h-[192px] md:mt-20 w-full flex justify-between items-center md:pl-[280px]">
                <div className=""> 
                    <h1 className="font-bold text-[15px] leading-[24px]">Icon</h1>
                    <ul className="space-y-2 mt-2">
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Air Force 1</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Huarache</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Air Max 90</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Air Max 95</li>
                    </ul>
                </div>
                <div>
                <h1 className="font-bold text-[15px] leading-[24px]">Shoes</h1>
                    <ul className="space-y-2 mt-2">
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">All Shoes</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Custom Shoes</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Jordan Shoes</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Running Shoes</li>
                    </ul>
                </div>
                <div>
                <h1 className="font-bold text-[15px] leading-[24px]">Clothing</h1>
                    <ul className="space-y-2 mt-2">
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">All Clothing</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Modest Wear</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Hoodies & Pullovers</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Shirts & Tops</li>
                    </ul>

                </div>
                <div className=" md:mr-40">
                <h1 className="font-bold text-[15px] leading-[24px]">Kids</h1>
                    <ul className="space-y-2 mt-2">
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Infants & Toddlers shoes</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Kid's Shoes</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Kid's Jordan Shoes</li>
                        <li className="text-[#757575] font-medium text-[15px] leading-[24px]">Kid's Basket Ball Shoes</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}