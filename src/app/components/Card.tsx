import { MdCurrencyRupee } from "react-icons/md";
import Image , {StaticImageData} from "next/image";
interface ICardProps {
    imageUrl : StaticImageData;
    heading : string;
    paragraph : string;
    span : string;
}

export default function Card({ imageUrl, heading, paragraph ,span}:ICardProps){
    return(
        <div className="flex">

        <div className="w-full h-[540.36px]" >
         <div className="w-[400px] h-[400px]">
                <Image
                src={imageUrl}
                alt="not found" />
            
            <div className="h-[48px] w-[400px] flex  justify-between items-center">
                <h1 className="font-medium text-[15px] leading-[24px] ml-4 hover:text-[18px] cursor-pointer">{heading}</h1>
                <h2 className="flex mr-4">
                <MdCurrencyRupee className="mt-1 hover:font-semibold hover:text-lg cursor-pointer" />{span}
                </h2>
            </div>

            <div className="text-[#757575] font-medium text-[15px] hover:text-lg leading-[24px] ml-4 relative bottom-3 cursor-pointer">
            <p>{paragraph}</p>
            </div>
                
            
           
        </div>
        
        </div>
        </div>
    )

}
