import { star } from "../assets/icons"
const PopularProductsCard = ({imgURL,price,name}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <img
    src={imgURL}
    alt={name}
    className="h-[280px] w-[280px]"
    ></img>
    <div className="mt-8 flex justify-start gap-2.5">
     <img src={star} alt="rating" width={24} height={24}></img>
     <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.6)</p>     
    </div>
    <h3 className="font-montserrat text-2xl leading-normal font-semibold cursor-pointer">{name}</h3>
    <p className="text-xl leading-normal text-teal-300 font-semibold cursor-pointer">{price}</p>
    </div>
  )
}

export default PopularProductsCard