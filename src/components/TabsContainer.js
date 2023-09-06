/** left side bar component 
 * 
*/
import { useEffect, useState } from "react";

const TabsContainer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showMenuBtn, setShowMenu] = useState(true);
  const [smMenu, setSmMenu] = useState(false)
  
  const showHamburgerMenu = () =>{
    setIsSmallScreen(window.innerWidth>1280)
  }

  //Check every time when user resize the window
  //and show the hamburger menu.
  useEffect((e)=>{
    setIsSmallScreen(window.innerWidth>1280);
    window.addEventListener("resize", showHamburgerMenu);

    //clean up
    return () => window.removeEventListener("resize", showHamburgerMenu);
  });

  useEffect((e)=>{
    setIsSmallScreen(window.innerWidth>1280);
    setShowMenu(window.innerWidth<1280)
  }, []);

  return (

    <div className="w-full md:w-1/3 p-4 border">
      <div className="relative">
      <div className={`relative align-right p-2 space-y-1 w-8 ml-auto bg-gray-600 rounded shadow ${isSmallScreen?'hidden':''} cursor-pointer`} 
        onClick={()=>setSmMenu(!smMenu)}>
        <span className="block h-0.5 bg-gray-100 animate-pulse"></span>
        <span className="block h-0.5 bg-gray-100 animate-pulse"></span>
        <span className="block h-0.5 bg-gray-100 animate-pulse"></span>
      </div>
      <div className=" w-full bg-white absolute">
				<ul className={`${!smMenu?'hidden':''}`}>
					<li className="mb-1">
						<a className="block p-4 text-base font-bold text-gray-800 hover:text-gray-400" href="#" onClick={()=>setSmMenu(!smMenu)}>DETAILS</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-base text-gray-800 hover:text-gray-400" href="#" onClick={()=>setSmMenu(!smMenu)}>DELIVERY</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-base text-gray-800 hover:text-gray-400" href="#" onClick={()=>setSmMenu(!smMenu)}>FIT</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-base text-gray-800 hover:text-gray-400" href="#" onClick={()=>setSmMenu(!smMenu)}>SHARE</a>
					</li>
				</ul>
			</div>
      </div>
      <div className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 space-y-2 ${!isSmallScreen?'hidden':''}`}>
        <a href="#" className="py-2 px-4 font-bold hover:text-black">DETAILS</a>
        <a href="#" className="py-2 px-4 hover:text-gray-400">DELIVERY</a>
        <a href="#" className="py-2 px-4 hover:text-gray-400">FIT</a>
        <a href="#" className="py-2 px-4 hover:text-gray-400">SHARE</a>
      </div>
      <div className="text-left">
        <p>The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.</p>
        <p className="mt-4">See the <u><a href="#" className="hover:text-gray-400">EDITOR’S NOTE</a></u></p>
        <p className="mt-4">Learn about  the <u><a href="#" className="hover:text-gray-400">DESIGNER</a></u></p>
      </div>
    </div>
  );
};

export default TabsContainer;
