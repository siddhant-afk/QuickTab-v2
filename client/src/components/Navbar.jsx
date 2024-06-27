import avatar from "../assets/images/IMG_0212.jpg";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";


function Navbar() {
 
  const [menu,toggleMenu] = useState(false)
  function toggleAvatarMenu(){
    
    if(menu == false)
    toggleMenu(true);
    
    if(menu == true)
      toggleMenu(false);
  }

  

  return (

    <section className="navbar flex  pr-10 text-white flex justify-end">
      <div className="avatar dropdown">
        <button className="dropbtn flex" onClick={toggleAvatarMenu}>
          <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar" />
          <h5 className=" px-2 my-2">Siddhant Dudhane <IoChevronDownOutline className="inline" /></h5>
        </button>
        <div className={ menu?"dropdown-content-active":"dropdown-content"}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>

      </div>

    </section>
  )
}

export default Navbar;