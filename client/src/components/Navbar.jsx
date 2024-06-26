import avatar from  "../assets/images/IMG_0212.jpg";
import { IoChevronDownOutline } from "react-icons/io5";;

 

function Navbar(){

    return(
      
        <section className="navbar flex  pr-10 text-white flex justify-end">
          <div className="flex avatar">
            <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar" /> 
            <h5 className=" px-2 my-2">Siddhant Dudhane <IoChevronDownOutline className="inline"/></h5>
          </div>
          
        </section>
    )
}

export default  Navbar;