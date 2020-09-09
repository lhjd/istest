import { useState } from 'react'

const navbar = () => {
  const [currentSection, setCurrentSection] = useState('#');
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
      className={currentSection === e.anchor ? 'mx-4 pb-1 border-b-2 border-red-600' : 'mx-4'}
    >{e.text}</a>
  ));

  return (
    <nav className="py-5 flex items-center justify-between relative">
      <div className="flex items-center relative">
        <img src="/images/logo.png" alt="logo" className="mr-2 h-20 w-20 relative z-10" />
        <h1 className="mr-2 text-3xl font-bold uppercase relative z-10">Power</h1>
        <div className="circle bg-gray-200 rounded-full absolute z-0 transform -translate-x-56 -translate-y-20"></div>
      </div>
      <div className="mr-32 z-10 flex items-baseline fixed top-0 right-0 transform translate-y-4">
        {navLinks}
      </div>
    </nav>
  );
}

export default navbar;