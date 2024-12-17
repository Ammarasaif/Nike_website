import Image from "next/image";
import Shoe from "@/app/assets/Shoe image.png";

export default function Hero (){
    return(
        <div>
            <div className="text-center mt-3  py-2 bg-[#F5F5F5]">
                 <h1 className="text-[15px] font-medium leading-[16px] mr-4">Hello Nike App</h1>
                 <p className="text-[11px] font-sans font-normal  leading-[24px] mt-[5px]"> Download the app to access everything Nike. <span className="font-medium underline underline-offset-2 hover:font-bold cursor-pointer">Get Your Great</span></p>
           </div>
           <div className="">
            <Image src={Shoe} alt="Image" />
           </div>
           <div className="text-center">
            <h1 className="text-[15px] font-medium leading-[24px] mt-2 md:mt-6"> First Look </h1>
            <h2 className="text-[30px] md:text-[56px] leading-[60px] font-medium md:mt-5"> NIKE AIR MAX PULSE </h2>
            <p className="text-[10px] md:text-[15px] font-normalleading-[24px] text-center md:mt-6"> Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
            —designed to push you past your limits and help you go to the max </p>
           </div>
           <div className=" w-full h-[45px] flex justify-center gap-2 mt-8">
            <button className="w-[110.58px] h-[39px] hover:h-[45px] hover:w-[120px] rounded-[30px] bg-black text-white text-[15px] leading-[24px] font-medium hover:font-semibold hover:text-[16px]">
                Notify Me
            </button>
            <button className="w-[138.16px] h-[39px] hover:w-[145px] hover:h-[45px] rounded-[30px] bg-black text-white leading-[24px] font-medium hover:font-semibold hover:text-[16px]">
                Shop Air Max
            </button>
                
           </div>

            </div>
    )
}