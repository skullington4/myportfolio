export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full flex flex-wrap justify-between items-center">
      <div className="flex-grow">
        <a href="#home" className="mx-2 scroll-smooth block">Kevin Sullivan</a> {/* Updated to block for easier tapping */}
      </div>
      <div className="flex space-x-4">
        <a href="#about" className="scroll-smooth block">About</a>
        <a href="#projects" className="scroll-smooth block">Projects</a>
        <a href="#hobbies" className="scroll-smooth block">Hobbies</a>
      </div>
    </nav>
  );
}
