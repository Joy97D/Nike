import { star } from '../assets/icons'
const ReviewCard = ({imgURL,feedback,rating,customerName}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-2 flex justify-center flex-row gap-2 font-semibold text-2xl '>
          <img
          src={star}
          width={24}
          height={24}
          className='object-contain m-0'
          />
          <p>({rating})</p>
        </div>
        <h3 className='mt-2 text-2xl font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard