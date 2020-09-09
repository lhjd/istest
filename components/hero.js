import Dots from './dots'

const hero = () => {
  return (
    <section className="relative z-10 ml-48 mt-5 flex items-center justify-between">
      <div className="relative w-2/5">
        <h2 className="text-4xl">Build Your Body &</h2>
        <h1 className="text-5xl font-bold"><span className="pb-2 border-b-4 border-red-600">Sh</span>ape Yourself!</h1>
        <p className="mt-4 mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore architecto beatae vitae dicta sunt explicabo.</p>
        <button className="flex items-center">
          <div className="text-white bg-red-600 rounded-l h-10 px-5 flex items-center">
            <h3>Join Today</h3>
          </div>
          <div className="text-white bg-red-700 rounded-r h-10 px-3 flex items-center">
            <img src="/images/arrow-long.svg" alt="Join Today" className="h-3" />
          </div>
        </button>
      </div>
      <div className="relative">
        <img src="images/hero.png" alt="Hero" className="hero z-10 relative transform translate-x-20" />
        <div className="circle bg-gray-200 rounded-full absolute top-0 left-0 z-0 transform translate-x-48 -translate-y-4"></div>
        <div className="circle-medium bg-gray-200 rounded-full absolute top-0 left-0 z-0 transform translate-x-10 translate-y-48"></div>
        <div className="circle-small bg-indigo-400 rounded-full absolute bottom-0 right-0 z-0 transform -translate-y-32"></div>
        <div className="circle-small bg-red-200 rounded-full absolute bottom-0 left-0 z-0 transform translate-x-20 -translate-y-20"></div>
        <div className="absolute top-0 left-0 transform -translate-x-10 translate-y-48">
          <Dots/>
        </div>
      </div>
    </section>

  );
};

export default hero;