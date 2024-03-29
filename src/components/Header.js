import React, { useEffect, useState } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton} from "@material-tailwind/react";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    //Adding window resize event to get the current window
    //size to set the menu view.
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">The Edit </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">New Arrivals</a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">One New Item</a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 text-black">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">MyCompany.com</Typography>
        <div className="hidden lg:block">{navList}</div>
        <span className="hidden lg:block">
          <img src="./images/Search.svg" alt="Search" className="w-6 h-6 cursor-pointer lg:inline-block" />
          <img src="./images/Account.svg" alt="Account" className="w-6 h-6 cursor-pointer lg:inline-block" />
          <img src="./images/Cart.svg" alt="Cart Bag" className="w-6 h-6 cursor-pointer lg:inline-block" />
        </span>



        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)} >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
            <span>
              <a href="#" className="flex items-center"> Search </a>
            </span>
          </Typography>
          <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
            <span>
              <a href="#" className="flex items-center"> User Profile </a>
            </span>
          </Typography>
          <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
            <span>
              <a href="#" className="flex items-center">Account </a>
            </span>
          </Typography>
        </div>
      </MobileNav>
    </Navbar>
  );
}
export default Header;