import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-full font-bold font-palanquin">Sign up For<span className="text-teal-300"> Updates</span> & Newsletters</h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text"
        placeholder="subscribe@nike.com"
        className="input" />
        <div className="flex max-sm:justify-end items-center">
          <Button label="Sign up" />
        </div>
      </div>
    </section>
  )
}

export default Subscribe