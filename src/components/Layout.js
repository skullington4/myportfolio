// src/components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-min-screen pt-24 bg-[]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
