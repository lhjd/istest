function Layout({ children }) {
  return (
  <div className="relative overflow-hidden">
    <div className="xl:ml-48">
      {children}
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 846.667 423.333" className="z-0 w-screen hidden md:block absolute bottom-0 left-0">
        <path d="M0 423.333V190.11S47.01 81.295 123.624 45.71c122.282-56.798 130.846 66.376 339.705 95.574 171.997 24.045 193.724-4.893 274.258-12.466 67.93-6.388 109.08 2.078 109.08 2.078v292.437z" fill="#f92524" />
    </svg>
  </div>);
}

export default Layout
