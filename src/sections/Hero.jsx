import  Button  from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1,bigShoe2 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'
const Hero = () => {
  const [shoe,setshoe]=useState(bigShoe1)
  const handleshoechange=(newshoe)=>{
    setshoe(newshoe)
    // console.log('Shoe changed')
  }
  return (
    <section
     id="home"
     className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-3xl font-montserrat text-teal-300 font-bold'>
          Our Summer collection
        </p>
        <h1 className='mt=10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font bold'>
          <span className='xl-bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='inline-block text-teal-300 mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm'>
          Discover Stylish Nike Arrivals, quality comfort, and innovation for your active life 
        </p>
        <Button label="Shop now" IconURL={arrowRight}/>
        <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map(stat=>(<div>
            <p className='text-4xl font-palanquin font-bold'>
              {stat.value}
            </p>
            <p className='leading-7 font-montserrat text-slate-gray'>
              {stat.label}
            </p>
          </div>))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
        src={shoe}
        alt="shoe collection"
        width={610}
        height={500}
        className='object-contain relative z-10'
         />
         <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm-left-[10%] max-sm:px-6'>
          {shoes.map((shoe2)=>(
            <div key={shoe2}>
              <ShoeCard
              imgURL={shoe2}
              changeBigShoeImage={(newshoe)=>handleshoechange(newshoe)}
              bigShoeImg={shoe}
              />
              </div>
          ))}
         </div>
      </div>
     </section>
  )
}

export default Hero