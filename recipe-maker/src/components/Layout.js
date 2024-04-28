import Navbar from './Navbar/Navbar.js';
import { ThemeProvider } from '../contexts/ThemeContext.js';
const Layout = ({ children }) => {
  const navlist = [
    { name: 'Home', navTo: '/' },
    { name: 'About', navTo: '/about' },
  ];

  return (
    <ThemeProvider>
      <div className="bg-gray-100 dark:bg-cyan-950">
        <Navbar
          navbarItems={navlist}
          className="mb-2 bg-gray-400 sticky top-0 z-40 w-screen  dark:border-slate-50 dark:bg-transparent dark:text-neutral-300 shadow-lg"
        />
        <main className=" h-screen w-screen">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
