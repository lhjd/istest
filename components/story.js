import Dots from './dots'

const story = () => {
  return (
    <section className="flex ml-48 mt-4">
      <div className="relative mr-2">
        <img src="/images/story_blob.svg" alt="Our Story" className="absolute z-0 transform -translate-x-48" />
        <img src="images/story.png" alt="Our Story" className="hero z-10 relative" />
        <div className="absolute top-0 right-0 transform translate-y-20">
          <Dots />
        </div>
      </div>
      <div className="w-2/5 ml-10">
        <h2 className="text-2xl font-bold mb-8 mt-12">
          <span className="pb-4 border-b-4 border-red-600">Our S</span>tory
      </h2>
        <p className="text-xs mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p className="text-xs pb-4 mb-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        <div>
          <div className="flex items-center mb-8">
            <img src="/images/open_door_policy.svg" alt="Open Door Policy" className="h-16 mr-2 px-4" />
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">Open Door Policy</h3>
              <p className="text-xs">Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <img src="/images/fully_insured.svg" alt="Fully Insured" className="h-16 mr-2 px-4" />
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">Fully Insured</h3>
              <p className="text-xs">Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <img src="/images/personal_trainer.svg" alt="Personal Trainer" className="h-16 mr-2 px-4" />
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">Personal Trainer</h3>
              <p className="text-xs">Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi vitae dicta sunt explicabo sequi nesciunt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default story;