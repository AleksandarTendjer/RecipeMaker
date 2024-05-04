import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import { MoonIcon, SunIcon } from '../../assets/icons.js';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js';
const Navbar = ({ navbarItems, className }) => {
  const { isDarkOn, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className={className}>
      <div className="flex items-center gap-2  ml-5 h-full hover:cursor-pointer mr-6">
        <img src={logo} alt="logo" className="w-6 mr-5" />
        <ul className="flex  gap-2 items-center  ">
          {navbarItems?.map((value, index) => {
            return (
              <li key={index} className=" h-full ">
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? 'h-full hover:bg-slate-400 dark:bg-slate-600 bg-slate-300 flex items-center justify-center p-2 '
                      : 'h-full hover:bg-slate-400  flex items-center justify-center p-2 rounded-md ';
                  }}
                  to={value?.navTo}
                >
                  {value.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="bg-cover bg-center h-full flex justify-center items-center ml-auto mr-5"
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
