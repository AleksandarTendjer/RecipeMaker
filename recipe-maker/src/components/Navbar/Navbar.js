import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import { MoonIcon, SunIcon } from '../../assets/icons.js';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.js';
const Navbar = ({ navbarItems, className }) => {
  const { isDarkOn, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className={className}>
      <div className="ml-5 mr-6 flex h-full items-center gap-2 hover:cursor-pointer">
        <img src={logo} alt="logo" className="mr-5 w-6" />
        <ul className="flex items-center gap-2">
          {navbarItems?.map((value, index) => {
            return (
              <li key={index} className="h-full">
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? 'flex h-full items-center justify-center bg-slate-300 p-2 hover:bg-slate-400 dark:bg-slate-600'
                      : 'flex h-full items-center justify-center rounded-md p-2 hover:bg-slate-400';
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
          className="ml-auto mr-5 flex h-full items-center justify-center bg-cover bg-center"
          onClick={toggleDarkMode}
        >
          {isDarkOn ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
