import Image, { StaticImageData } from "next/image";

interface ICardProps {
        imageUrl : StaticImageData;
        heading : string ;
        paragraph : string ;
        span : string ;
        h2 :string ;
        h3 : string ;
}

export default function Card3 ({imageUrl , heading , paragraph , span, h2, h3} : ICardProps){

    return (
        <div>
            <div>
            <Image src={imageUrl}  alt="image"/>
            <h1 className="text-[15px] leading-[28px] font-medium text-[#9E3500]">
                {heading}
            </h1>
            <h2 className="text-[15px] leading-[24px] font-medium">
            {h2}
            </h2>
            <h3 className="text-[15px] leading-[24px] font-normal text-[#757575]">
            {h3}
            </h3>
            <span className="text-[15px] leading-[24px] font-normal text-[#757575]"> {span} </span>
            <p>
            {paragraph}
            </p>

            </div>
        
        </div>
    )
}