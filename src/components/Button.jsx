const Button = ({label,IconURL,backgroundColor,textColor,borderColor,fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4
     border font-montserrat text-lg leading-none
     ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
     "bg-teal-300 textColor: text-white border-teal-300"}
       rounded-full ${fullwidth && 'w-full'}"}`}>
        {label}
        {IconURL &&<img
        src={IconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
        ></img> }
    </button>
  )
}
    
export default Button