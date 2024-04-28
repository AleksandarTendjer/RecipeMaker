import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { MoonIcon, SunIcon } from '../../assets/icons.js';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js';
const Navbar = ({ navbarItems, className }) => {
  const { isDarkOn, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className={className}>
      <div className="flex items-center gap-2  ml-5 h-full hover:cursor-pointer mr-6">
        <img src={logo} alt="logo" className="w-6" />
        <ul className="flex  gap-2 items-center  ">
          {navbarItems?.map((value, index) => {
            return (
              <li key={index} className=" h-full ">
                <NavLink
                  className={
                    'h-full hover:bg-slate-400  flex items-center justify-center p-6'
                  }
                  to={value?.navTo}
                >
                  {value.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="bg-cover bg-center w-32 h-32 flex justify-center items-center border border-gray-300 rounded-md shadow-md ml-auto"
          onClick={toggleDarkMode}
        >
          {isDarkOn ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
