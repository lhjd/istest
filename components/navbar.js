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
      onClick={() => {
        setCurrentSection(e.anchor);
        setIsOpen(false);
      }}
      className={
        currentSection === e.anchor ? 
        (e.text === 'Contact Us' ? 'mx-4 px-4 py-2 text-white rounded bg-brand-primary' : 'mx-4 py-2 pb-1 text-brand-primary xl:text-black xl:border-b-2 xl:border-brand-primary')
        : 
        (e.text === 'Contact Us' ? 'mx-4 px-4 py-2 text-white rounded bg-brand-primary' : 'mx-4 py-2')}
    >{e.text}</a>
  ));

  return (
    <header className="flex flex-col px-4 py-3 relative z-20">
      <div className="flex flex-col xl:flex-row items-center xl:justify-between px-4 py-3 p-0">
        <div className="hidden xl:flex md:pt-10 lg:pt-0 items-center relative">
          <img src="/images/logo.png" alt="logo" className="mr-2 h-20 w-20 relative z-10" />
          <h1 className="mr-2 text-3xl font-bold uppercase relative z-10">Power</h1>
          <div className="h-128 w-128 bg-brand-gray300 rounded-full absolute z-0 transform -translate-x-56 -translate-y-20"></div>
        </div>
        <div className="fixed px-10 xl:px-0 flex w-full items-center justify-between xl:hidden">
          <img className="h-8 block relative z-10 xl:hidden" src="/images/logo.png" alt="Logo" />
          <div className="xl:hidden relative">
            <button onClick={() => setIsOpen(prevState => !prevState)} type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current text-gray-600" viewBox="0 0 24 24">
                { isOpen ?
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                  :
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                }
              </svg>
            </button>
            <nav className={`absolute w-64 right-0 bg-white border border-brand-secondary rounded px-2 pt-2 pb-4 flex flex-col p-0 xl:hidden ${isOpen ? 'block' : 'hidden'}`}>
              {navLinks}
            </nav>
          </div>
        </div>
      </div>
      <nav className={`z-20 px-2 pt-2 pb-4 hidden xl:block fixed top-0 right-0 transform xl:translate-y-4`}>
        {navLinks}
      </nav>
    </header>
  );
}

export default navbar;