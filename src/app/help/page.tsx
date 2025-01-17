import {Inter} from "next/font/google";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Thumb1 from "@/app/assets/thumb1.png";
import Thumb2 from "@/app/assets/thumb2.png";
import Footer from "../components/Footer";
import Mobile from "@/app/assets/mobile.png";
import TextBar from "@/app/assets/textbar.png";
import Inbox from "@/app/assets/inbox.png";
import LocBar from "@/app/assets/locbar.png";

const inter = Inter({
    subsets: ["latin"],
    weight:["500","400"]
})
export default function Help (){
    return (
        <div>
            <div> <Header /> </div>
            <div>
           <div className="w-full hidden md:flex h-[32px] mt-10 ">
            <h1 className={`${inter.className} text-[32px] leading-[36px] text-center`}>GET HELP</h1>
            <input
            type ="What can help you with"
            placeholder="What can we help you with?"
            className="w-[130px] md:w-[457.33px] h-[56px] text-[#757575] hidden md:flex ml-10 md:ml-[390px] mt-6 border-slate-800 border-[1px] rounded-lg  pl-8" />
            <IoIosSearch  className="text-center ml-[400px] relative bottom-9 "/>
           </div>
           <div className="flex">
           <div className="h-[1042px] w-full md:ml-24 mt-36  ">
              <h1 className={`${inter.className} text-[28px] font-medium leading-[36px]`} > 
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                <p className="text-[15px] leading-[28px] mt-8">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options: 
                </p>
                <div>
                <h1 className={`text-[16px] leading-[28px] font-normal mt-8 ml-6 ${inter.className}`}>
                    Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro </h1>
                    <p className="tetx-[15px] leading-[28px] ml-6 mt-5">
                    If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
                    </p>
                    <h2 className={`${inter.className} font-normal ml-6 text-[16px] leading-[28px] mt-10`}>Apple Pay</h2>
                </div>
                <div>
                    <h1 className={`${inter.className} font-normal text-[15px] leading-[28px]`}>
                    <span className="font-medium underline">Nike Members </span>can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, <span className="font-medium underline">join <br /> us</span> today.
                    <div className="flex mt-6">
                    <div>
                        <button className="bg-black text-white w-[106.13px] h-[39px] text-[16px] leading-[24px] rounded-full">JOIN US</button>
                    </div>
                    <div className="ml-6">
                        <button className="bg-black text-white w-[129.84px] text-[16px] leading-[24px] h-[39px] rounded-full">SHOP NIKE </button>
                    </div>
                    </div>
                    </h1>
                </div>
                <div>
                    <h1 className={`text-[20px] leading-[24px]  ${inter.className}font-medium mt-6 `}>FAQs</h1>
                    <h2 className="text-[16px] leading-[28px] mt-4 font-bold">Does my card need international purchases enabled?
                        <span className="font-normal"> <br />Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout <br />if international purchases need to be enabled.</span>
                    </h2>
                    <p className="font-normal text-[15px] mt-6 leading-[28px]">Please note, some banks may charge 
                        <span className="font-semibold  border-black border-b-[1px]"> a small transaction fee </span> for international orders.</p>
                </div>
                
                    <h1 className="text-[15px] leading-[28px] font-bold mt-6  ">Can I pay for my order with multiple methods?</h1>
                    <span className="font-normal">No, payment for Nike orders can't be split between multiple payment methods.</span>
                
                    <h2 className="text-[15px] leading-[28px] font-bold mt-6  ">What payment method is accepted for SNKRS orders?</h2>
                    <span className="font-normal">You can use any accepted credit card to pay for your SNKRS order..</span>
                
                    <p className="text-[16px] leading-[28px] font-bold mt-6  ">Why don't I see Apple Pay as an option?</p>
                    <span className="font-normal">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest <br /> OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use <br /> Apple Pay on Nike.com</span>

                    <div className="mt-5">
                       <h1 className="text-[15px] leading-[28px] font-normal mt-">Was this answer helpful?</h1>
                        <div className="flex">
                            <Image src={Thumb1} alt="pic" />
                            <Image src={Thumb2} alt="pic" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[16px] text-[#757575] leading-[24px] mt-6 font-medium">RELATED</h1>
                        <span className="text-[16px] pt-10 text-black leading-[24px] border-black border-b-[2px] font-medium">WHAT ARE NIKE'S DELIVERY OPTIONS? <br  />
                        HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</span>
                    </div>
                
               </div>
           <div className="w-[313.25px] mt-[145px] h-auto shadow-xl border-l-2"> 

            <h1 className={`text-center h-auto text-[28px] ${inter.className} font-medium leading-[32px]`}>CONTACT US </h1>
            <div className="w-[265.25px] h-[242px]">
                <Image className="mt-10 ml-24" src={Mobile} alt="mobile" />
                <h1 className="text-[16px] leading-[24px]  mt-6  text-center font-medium " >000 800 919 0566  <br /><span>Products & Orders: 24 hours a day,</span>  <span> <br /> 7 days a week <br /> Company Info & Enquiries: 07:30 -</span> 16:30, Monday - Friday </h1>
            </div>
            <div>
                <Image className="mt-10 ml-24" src={TextBar} alt="text Bar" />
                <h1 className="text-[15px] mt-6 font-semibold leading-[24px] text-center ">24 hours a day</h1>
                <span className="ml-20">7 days a week</span>
            </div>
            <div>
                <Image className="mt-10 ml-24" src={Inbox} alt="inbox" />
                <h1 className="text-[15px] font-semibold mt-6 leading-[24px] text-center ">We'll reply within</h1>
                <span className="ml-[70px]">five business days</span>
            </div>
            <div>
            <Image className="mt-10 ml-24" src={LocBar} alt="inbox" />
                <h1 className="text-[16px] font-semibold mt-6 leading-[24px] text-center ">STORE LOCATOR</h1>
                <span className="ml-[30px]">Find Nike retail stores near you</span>
            </div>
           </div>
           </div>
           </div>
           <Footer />
        </div>
    )
}