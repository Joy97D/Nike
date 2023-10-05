import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import  Button  from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex flex-1 flex-col">
        <h2 className='mt=10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-teal-300 '>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a Shopping Journey that redefines your experience with unbeatable deals.From Premier selections to incredible savings,we offer unparalled value that sets us apart.
        </p>
        <p className='mt-6 mb-2 lg:max-w-lg info-text'>
         Navigate a realm of possibilities designed to fulfil your unique desires, surpassing the loftiest expectations.Your journey with us is nothing short of exceptional. 
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now" IconURL={arrowRight}/>
        <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
     </div>
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
    </section>
  )
}

export default SpecialOffer