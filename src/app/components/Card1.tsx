import Image from "next/image";
import image, { StaticImageData } from "next/image";
import { MdCurrencyRupee } from "react-icons/md";

interface ICardProps {
    imageUrl : StaticImageData;
    heading : string ;
    paragraph : string ;
    span : string ;
    br :string ;
}

export default function Card({ imageUrl, heading, paragraph, span, br}:ICardProps){
    return(
       <div>
        <div className="ml-4">
    
                    <Image className="h-[200px] w-[350px]" src={imageUrl} alt="not found"
                     />
                    <div>
                        <div className="hidden md:flex items-center  text-[13px]  font-semibold leading-[24px] text-black">
                        <h1 className="mt-2">{heading}</h1> <span className="relative left-16"><MdCurrencyRupee className="relative top-[20px] right-4" /> {span}</span>
                        </div>
                        <p className="text-[#757575]  hidden sm:flex font-normal text-[16px]">{paragraph} <br />{br}</p>
                    </div>
                </div>
       </div>
    )}