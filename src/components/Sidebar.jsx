import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { HiOutlineMenu } from 'react-icons/hi';
import melody from '../assets/melody.svg';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        exact
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-green-200 hover:text-lime-500"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mx-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#0a1200]">
        <img src={melody} alt="logo" className="w-full h-24 object-contain animate-pulse" />
        <p className="uppercase text-lime-600 w-full text-center font-bold text-3xl animate-pulse">Spotyclon</p>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3 z-10">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-lime-100/10 to-[#0a1200] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={melody} alt="logo" className="w-full h-24 object-contain animate-pulse" />
        <p className="uppercase text-lime-600 w-full text-center font-bold text-3xl animate-pulse">Spotyclon</p>

        <NavLinks handleClic={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
