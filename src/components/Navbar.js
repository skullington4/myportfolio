export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full flex justify-between items-center">
      <div>
        <a href="#home" className="mx-2 scroll-smooth">Kevin Sullivan</a>
      </div>
      <div>
        <a href="#projects" className="mx-2 scroll-smooth">Projects</a>
        <a href="#about" className="mx-2 scroll-smooth">About</a>
        <a href="#hobbies" className="mx-2 scroll-smooth">Hobbies</a>
      </div>
    </nav>
  )
}
