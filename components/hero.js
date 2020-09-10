import Dots from './dots'

const hero = () => {
  return (
    <section className="relative mt-5 flex flex-col md:flex-row items-center justify-between">
      <div className="relative w-4/5 xl:w-2/5">
        <h2 className="text-3xl xl:text-4xl">Build Your Body &</h2>
        <h1 className="text-4xl xl:text-5xl font-bold"><span className="pb-2 border-b-4 border-brand-primary">Sh</span>ape Yourself!</h1>
        <p className="mt-4 mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore architecto beatae vitae dicta sunt explicabo.</p>
        <button className="flex items-center">
          <div className="text-white bg-brand-primary rounded-l h-10 px-5 flex items-center">
            <h3>Join Today</h3>
          </div>
          <div className="text-white bg-brand-maroon rounded-r h-10 px-3 flex items-center">
            <img src="/images/arrow-long.svg" alt="Join Today" className="h-3" />
          </div>
        </button>
      </div>
      <div className="relative">
        <img src="images/hero.png" alt="Hero" className="h-128 md:h-160 z-10 object-contain object-center relative transform translate-x-16" />
        <div className="h-64 w-64 xl:h-128 xl:w-128 bg-gray-200 rounded-full absolute top-0 left-0 z-0 transform translate-x-32 translate-y-16 xl:-translate-y-2"></div>
        <div className="h-64 w-64 bg-gray-200 rounded-full absolute top-0 left-0 z-0 transform translate-y-32 translate-x-8 md:translate-y-48 md:translate-x-8"></div>
        <div className="h-20 w-20 bg-red-200 rounded-full absolute bottom-0 left-0 z-0 transform translate-x-16 -translate-y-20"></div>
        <div className="h-20 w-20 bg-indigo-400 rounded-full absolute bottom-0 right-0 z-0 transform -translate-y-24 md:-translate-y-32"></div>
        <div className="absolute top-0 left-0 transform translate-y-32 xl:translate-y-48 xl:-translate-x-12">
          <Dots/>
        </div>
      </div>
    </section>

  );
};

export default hero;