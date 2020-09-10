import Dots from './dots'

const story = () => {
  return (
    <>
      <div id="story" className="mb-10"></div>
      <section className="flex flex-col lg:flex-row mt-20 mb-32">
        <div className="relative mr-2">
          <img src="/images/story_blob.svg" alt="Our Story" className="absolute z-0 transform -translate-x-120 -translate-y-64 xl:translate-y-0 xl:-translate-x-48" />
          <img src="images/story.png" alt="Our Story" className="h-128 xl:h-160 z-10 relative" />
          <div className="absolute top-0 right-0 transform -translate-x-64 xl:translate-x-0 translate-y-20">
            <Dots />
          </div>
        </div>
        <div className="w-4/5 text-justify xl:w-2/5 ml-10 relative z-10">
          <h2 className="text-3xl xl:text-2xl font-bold mb-8 mt-12">
            <span className="pb-4 border-b-4 border-brand-primary">Our S</span>tory
          </h2>
          <p className="text-base text-brand-secondary xl:mr-8 xl:text-xs mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p className="text-base text-brand-secondary xl:mr-8 xl:text-xs pb-4 mb-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <div>
            <div className="flex items-center mb-8">
              <img src="/images/open_door_policy.svg" alt="Open Door Policy" className="h-16 mr-2 px-4" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2">Open Door Policy</h3>
                <p className="text-xs text-brand-secondary">Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <img src="/images/fully_insured.svg" alt="Fully Insured" className="h-16 mr-2 px-4" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2">Fully Insured</h3>
                <p className="text-xs text-brand-secondary">Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <img src="/images/personal_trainer.svg" alt="Personal Trainer" className="h-16 mr-2 px-4" />
              <div className="flex flex-col">
                <h3 className="font-bold mb-2">Personal Trainer</h3>
                <p className="text-xs text-brand-secondary">Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default story;