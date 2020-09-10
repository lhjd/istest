import { useState } from 'react'

const navbar = () => {
  const [currentSection, setCurrentSection] = useState('#');
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    {text: 'Home', anchor: '#'}, 
    {text: 'About Us', anchor: '#story'},
    {text: 'Our Classes', anchor: '#classes'}, 
    {text: 'Our Trainers', anchor: '#trainers'}, 
    {text: 'Our Pricing', anchor: '#pricing'}, 
    {text: 'Contact Us', anchor: '#feedback'}];
  const navLinks = sections.map(e => (
    <a 
      href={e.anchor}
      key={e.text}
      onClick={() => setCurrentSection(e.anchor)}
      className={currentSection === e.anchor ? ' mx-4 pb-1 border-b-2 border-red-600' : 'mx-4'}
    >{e.text}</a>
  ));

  return (
    // <nav className="py-5 md:flex items-center justify-between relative">
    //   <div className="hidden md:flex items-center relative">
        // <img src="/images/logo.png" alt="logo" className="mr-2 h-20 w-20 relative z-10" />
        // <h1 className="mr-2 text-3xl font-bold uppercase relative z-10">Power</h1>
        // <div className="circle bg-gray-200 rounded-full absolute z-0 transform -translate-x-56 -translate-y-20"></div>
    //   </div>
    //   <div className="mr-32 z-10 flex flex-col md:flex-row items-baseline relative md:fixed top-0 right-0 transform translate-y-4">
    //     {navLinks}
    //   </div>
    // </nav>
    // <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <header className="flex flex-col px-4 py-3">
      <div className="flex items-center justify-between px-4 py-3 p-0">
        {/* <div> */}
        <img className="h-8 relative z-10 xl:hidden" src="/images/logo.png" alt="Logo" />
        <div className="hidden xl:flex md:pt-10 lg:pt-0 items-center relative">
          <img src="/images/logo.png" alt="logo" className="mr-2 h-20 w-20 relative z-10" />
          <h1 className="mr-2 text-3xl font-bold uppercase relative z-10">Power</h1>
          <div className="h-128 w-128 bg-gray-300 rounded-full absolute z-0 transform -translate-x-56 -translate-y-20"></div>
        </div>
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(prevState => !prevState)} type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24">
              { isOpen ?
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                :
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              }
            </svg>
          </button>
        </div>
      </div>
      <nav className={`z-20 px-2 pt-2 pb-4 hidden xl:block fixed top-0 right-0 transform xl:translate-y-4`}>
      {/* <nav className={`mr-32 z-10 flex flex-col md:flex-row items-baseline relative md:fixed top-0 right-0 transform translate-y-4 ${isOpen ? 'block' : 'hidden'}`}> */}
        {/* <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">List your property</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a> */}
        {navLinks}
      </nav>
      <nav className={`px-2 pt-2 pb-4 flex flex-col p-0 xl:hidden ${isOpen ? 'block' : 'hidden'}`}>
      {/* <nav className={`mr-32 z-10 flex flex-col md:flex-row items-baseline relative md:fixed top-0 right-0 transform translate-y-4 ${isOpen ? 'block' : 'hidden'}`}> */}
        {/* <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">List your property</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a> */}
        {navLinks}
      </nav>
    </header>
  );
}

export default navbar;