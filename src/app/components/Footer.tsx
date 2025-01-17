import Image from "next/image";
import Facebook from "@/app/assets/facebook.png";
import Twitter from "@/app/assets/twitter.png";
import Youtube from "@/app/assets/youtube.png";
import Insta from "@/app/assets/insta.png";
import Location from "@/app/assets/location.png";
import Text from "@/app/assets/text.png";

export default function Footer (){
    return( 
        <div>
        <div className="md:w-full w-[640px] sm:h-auto h-[200px] md:h-[331px] bg-black text-white flex items-center justify-between">
            <div className=" ml-2 md:ml-28">
                <h1 className="md:font-normal font-thin md:text-[10px] text-[7px] leading-[32.67px]"> FIND A STORE</h1>
                    <ul>
                     <li className="font-normal text-[10px] leading-[32.67px]">BECOME A MEMBER</li>
                     <li className="font-normal text-[10px] leading-[32.67px]"> SIGNUP FOR EMAIL</li>
                     <li className="font-normal text-[10px] leading-[32.67px]"> Send Us Feedback</li>
                     <li className="font-normal text-[10px] leading-[32.67px]"> STUDENT DISCOUNTS</li>
                    </ul>
                
            </div>
            <div>
            <h1 className="font-normal text-[10px] leading-[24px] tracking-[0.5px]"> GET HELP </h1>
                    <ul>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]">BECOME A MEMBER</li>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]"> SIGNUP FOR EMAIL</li>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]"> Send Us Feedback</li>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]"> STUDENT DISCOUNTS</li>
                    </ul>
                
            </div>
            <div>
            <h1 className="font-normal text-[10px] leading-[24px] tracking-[0.5px]"> ABOUT NIKE </h1>
                    <ul>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]">News</li>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]">Careers</li>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]">Investors</li>
                     <li className="font-normal text-[#7E7E7E] text-[10px] leading-[32.67px]">Sustainability</li>
                    </ul>
                
            </div>
            <div className="flex justify-around space-x-4 relative bottom-16 right-5">
                <Image  src={Twitter} alt="icon"  />
                <Image  src={Facebook} alt="icon"  />
                <Image  src={Youtube} alt="icon"  />
                <Image  src={Insta} alt="icon"  />
            </div>
            <div>
            </div>
          </div>
          <div className="h-[32px] w-full bg-black text-white flex justify-between items-center px-4">
            <div className="flex justify-center items-center">
                <Image src={Location} alt="icon" /> India
                <p className="text-[11px] font-normal leading-[12px] ml-5"> © 2023 Nike, Inc. All Rights Reserved </p>
            </div>
            <div className="text-white mb-4">
                <ul className="flex justify-center items-center space-x-6">
                    <li className="text-[#7E7E7E] font-normal text-[12px] leading-[28px]">Guides</li>
                    <li className="text-[#7E7E7E] font-normal text-[12px] leading-[28px]">Terms of Sale</li>
                    <li className="text-[#7E7E7E] font-normal text-[12px] leading-[28px]">Terms of Use</li>
                    <li className="text-[#7E7E7E] font-normal text-[11px] leading-[28px]">Nike Privacy Policy</li>
                </ul>
            </div>

          </div>
        </div>
    )
}