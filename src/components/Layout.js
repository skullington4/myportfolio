import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 pt-24 bg-white"> {/* Adjusted height and background color */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
