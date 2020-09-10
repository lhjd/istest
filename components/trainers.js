import TrainerProfile from './trainerProfile'
import TrainerPhoto from './trainerPhoto'

const trainers = () => {

  return (
    <>
      <div id="trainers" className="mb-48"></div>
      <section className="mb-32 flex flex-col items-center">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl font-bold text-center mb-10">
            Our<span className="pb-4 border-b-4 border-brand-primary"> Train</span>ers
          </h2>
          <p className="text-xs w-8/12 text-brand-secondary text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col xl:flex-row">
            <TrainerPhoto imgUrl="/images/trainer_1.png" />
            <TrainerProfile 
              name="Amaryan Jackson"
              title="Body Builder"
              bio="Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
              socialMedia={{facebook: null, googlePlus: "https://www.google.com", twitter: null, instagram: null}}
            />
            <TrainerPhoto imgUrl="/images/trainer_2.png" />
          </div>
          <div className="flex flex-col xl:flex-row">
            <TrainerProfile 
                name="Ilona Jeklin"
                title="Gymnast"
                bio="Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                socialMedia={{facebook: "https://www.facebook.com", googlePlus: null, twitter: null, instagram: null}}
              />
              <TrainerPhoto imgUrl="/images/trainer_3.png" />
              <TrainerProfile 
                name="John Doe"
                title="Body Builder"
                bio="Sed ut perspiciatis unde omnis iste natus error sit quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                socialMedia={{facebook: null, googlePlus: null, twitter: "https://www.twitter.com", instagram: "https://www.instagram.com"}}
              />
          </div>
        </div>
      </section>
    </>
  )
}

export default trainers;