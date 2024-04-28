import Navbar from './Navbar/Navbar.js';
import { ThemeProvider } from '../contexts/ThemeContext.js';
const Layout = ({ children }) => {
  const navlist = [
    { name: 'Home', navTo: '/' },
    { name: 'About', navTo: '/about' },
  ];

  return (
    <ThemeProvider>
      <div className="bg-gradient-to-r from-gray-300 via-sky-100 to-sky-200 dark:bg-gradient-to-t dark:from-blue-900 dark:via-teal-900 dark:to-blue-800 dark:text-neutral-300">
        <Navbar
          navbarItems={navlist}
          className="mb-2 bg-gray-200 border-b-2  border-gray-300    dark:border-b-0  sticky top-0 z-40 w-screen h-12  dark:border-slate-50 dark:bg-neutral-600  shadow-lg"
        />
        <main className=" h-screen w-screen">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
