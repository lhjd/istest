import Review from './review'
import FeedbackForm from './feedbackForm'

const feedback = () => {
  return (
    <>
    <div id="feedback" className="mb-48"></div>
    <section className="md:mb-96 mx-4 xl:mx-0">
        <h2 className="text-2xl font-bold">
          <span className="pb-1 xl:pb-4 border-b-4 border-red-600">What</span> People Says About Us?
        </h2>
        <p className="text-xs text-gray-500 mt-10 xl:w-8/12 mb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <div className="flex flex-col xl:flex-row items-center justify-center">
          <Review />
          <FeedbackForm />
        </div>
    </section>
    </>
  );
}

export default feedback;