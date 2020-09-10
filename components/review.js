const review = () => {
  return (
    <div className="w-64 md:w-88 shadow-lg p-4 relative">
      <div className="w-20 overflow-hidden rounded-full absolute transform -translate-y-10">
        <img src="/images/reviewer_1.png" alt="Body Building" className="h-20 w-full object-cover object-top" />
      </div>
      <div className="flex mb-6 mt-16">
        {[...Array(5)].map((e, i) => (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.5 63.5" className="h-4 w-4 mr-1" key={i}>
            <path d="M33.187 3.689l7.742 18.323 19.819 1.702a1.562 1.562 0 01.89 2.737L46.621 39.475l4.505 19.37a1.562 1.562 0 01-2.328 1.69L31.753 50.269 14.721 60.541a1.562 1.562 0 01-2.328-1.69l4.505-19.37L1.862 26.449a1.562 1.562 0 01.89-2.737l19.813-1.703 7.748-18.32a1.562 1.562 0 012.877 0z" fill="#ffd500"/>
          </svg>)
        )}
      </div>
      <p className="text-xs text-gray-500 font-light mb-6">Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
      <h3 className="text-sm font-bold">Christopher Doe</h3>
      <h3 className="text-sm text-gray-500 font-light">Orlando, Florida</h3>
    </div>
  );
}

export default review;