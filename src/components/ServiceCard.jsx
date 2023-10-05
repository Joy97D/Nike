const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] w-full sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
        <div className="bg-teal-300 w-11 h-11 flex justify-center items-center rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="font-bold mt-5 font-palanquin text-3xl leading-normal">{label}</h3>
        <p className="mt-3 break-words font-montserrat leading-normal text-slate-gray text-lg">{subtext}</p>
    </div>
  )
}

export default ServiceCard