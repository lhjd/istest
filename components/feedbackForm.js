const feedbackForm = () => {
  return (
    <form action="" className="w-144 shadow-lg px-16 py-10 mr-48">
      <h2 className="text-lg font-bold mb-8">Send us your feedback</h2>
      <input type="text" className="form-input block w-full placeholder-gray-700 font-light mb-4" placeholder="Full Name"/>
      <input type="text" className="form-input block w-full placeholder-gray-700 font-light mb-4" placeholder="Phone No."/>
      <textarea className="form-textarea block w-full placeholder-gray-700 font-light mb-4" rows="5" placeholder="Message"></textarea>
      <label className="inline-flex items-center mb-8">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600" defaultChecked/>
        <span className="ml-2 font-light text-gray-700">I agree with all conditions</span>
      </label>
      <button className="bg-red-600 px-6 py-2 text-white rounded block">Submit</button>
    </form>
  );
}

export default feedbackForm;