import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="items-start justify-between gap-20 flex flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
            src={footerLogo}
            width={150}
            height={46}
            />
          </a>
          <p className="mt-6 text-white-400 text-base leading-7 font-montserrat sm:max-w-sm"> Get shoes ready for the new term at your nearest Nike Store.Find your perfect size in store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item)=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img
                src={item.src}
                alt={item.alt}
                width={24}
                height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link)=>(
            <div key={link}>
              <h4 className="text-white-400 mb-6 text-2xl leading-normal">{link.title}</h4>
              <ul>
                {link.links.map((l)=>(
                  <li className="text-white-400 text-base mt-3 leading-normal hover:text-slate-gray cursor-pointer" key={l.name}>
                    <a>{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer font-montserrat">
          <img
          src={copyrightSign}
          alt="copyright sign"
          height={20}
          width={20}
          className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer