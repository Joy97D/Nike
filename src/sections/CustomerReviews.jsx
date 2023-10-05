import  ReviewCard  from '../components/ReviewCard'
import  { reviews }  from '../constants'
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palaquin text-center text-4xl font-bold">
        What Our 
        <span className="text-teal-300">  Customers </span>
        Say?
      </h3>
      <p className="text-2xl text-slate-gray text-center mt-4">Hear genuine stories from our statisfied customers about their exeptional experiences with us</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">{reviews.map((review)=>(<ReviewCard
      key={review.customerName}
      imgURL={review.imgURL}
      customerName={review.customerName}
      rating={review.rating}
      feedback={review.feedback}
      />))}</div>
    </section>
  )
}

export default CustomerReviews