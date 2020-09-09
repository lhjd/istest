import Link from 'next/link'

const navbar = () => {
  return (
    <nav className="py-5 flex items-center justify-between relative">
      <div className="flex items-center z-10">
        <img src="/images/logo.png" alt="logo" className="mr-2 h-20 w-20" />
        <h1 className="mr-2 text-3xl font-bold uppercase">Power</h1>
      </div>
      <div className="circle bg-gray-200 rounded-full absolute z-0 transform -translate-x-56 -translate-y-20"></div>
      <div className="mr-32 relative z-10 flex items-baseline">
        <Link href="/"><a className="mx-4 pb-1 border-b-2 border-red-600">Home</a></Link>
        <Link href="/"><a className="mx-4">About Us</a></Link>
        <Link href="/"><a className="mx-4">Our Classes</a></Link>
        <Link href="/"><a className="mx-4">Our Trainers</a></Link>
        <Link href="/"><a className="mx-4">Our Pricing</a></Link>
        <Link href="/"><a className="mx-4 px-6 py-2 bg-red-600 text-white rounded">Contact Us</a></Link>
      </div>
    </nav>
  );
}

export default navbar;