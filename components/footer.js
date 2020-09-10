import CompanySocialMedia from './company_social_media'

const footer = () => {
  return (
    <footer className="mt-32 relative z-10 flex flex-col items-center bg-brand-primary xl:bg-transparent">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 846.667 423.333" className="fill-current text-brand-primary xl:hidden bg-white">
          <path d="M0 423.333V190.11S47.01 81.295 123.624 45.71c122.282-56.798 130.846 66.376 339.705 95.574 171.997 24.045 193.724-4.893 274.258-12.466 67.93-6.388 109.08 2.078 109.08 2.078v292.437z" />
      </svg>
      <div className="flex flex-col xl:flex-row items-center mb-16 bg-brand-primary xl:bg-transparent">
        <div className="w-4/5 xl:w-1/2 mb-6">
          <div className="mt-6 w-16 xl:w-32 overflow-hidden mb-4 xl:mb-10">
            <img src="/images/logo_footer.png" alt="Logo" className="h-16 xl:h-32 w-full object-contain object-center" />
          </div>
          <p className="text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <CompanySocialMedia />
        </div>
        <div className="w-4/5 xl:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-10">
            <span className="pb-4 border-b-4 border-white">Get In</span> Touch
            </h2>
          <div className="flex flex-col xl:flex-row">
            <div className="xl:w-3/5 mr-4 mb-6">
              <h3 className="text-white font-bold mb-4">Address</h3>
              <h4 className="text-white text-xs font-light mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917" className="h-4 w-4 xl:h-4 xl:w-4 mr-2 text-white fill-current">
                  <path d="M26.457 1.323A18.227 18.227 0 008.249 19.53c0 12.458 16.293 30.75 16.99 31.524a1.65 1.65 0 002.44 0c.693-.773 16.988-19.063 16.988-31.524a18.23 18.23 0 00-18.21-18.208zm0 27.368a9.16 9.16 0 119.16-9.16 9.171 9.171 0 01-9.16 9.16z" />
                </svg>
                <span>
                  123 Madison Street New York City, NY 10001.
                  </span>
              </h4>
              <h4 className="text-white text-xs font-light flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 xl:h-4 xl:w-4 xl:mr-2 text-white fill-current">
                  <path d="M7.663 0a7.663 7.663 0 107.663 7.663A7.672 7.672 0 007.663 0zm0 13.652a5.988 5.988 0 115.988-5.988 5.995 5.995 0 01-5.988 5.988z" />
                  <path d="M258.087 143.116V139.9a.65.65 0 10-1.3 0v3.449a.645.645 0 00.187.491l2.418 2.418a.65.65 0 00.918-.918z" transform="translate(-249.761 -135.444)" />
                </svg>
                <span>
                  Mon - Fri 08:00 AM - 09:00 PM
                </span>
              </h4>
            </div>
            <div className="xl:w-2/5">
              <h3 className="text-white font-bold mb-4">Contact Info</h3>
              <h4 className="text-white text-xs font-light mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917" className="h-4 w-4 mr-2 text-white fill-current">
                  <g transform="matrix(3.40033 0 0 3.40033 1.327 6.712)">
                    <path transform="translate(-16.491 -316.425)" d="M29.954 328.041a1.263 1.263 0 00.865-.326l-4.188-4.188-.29.208q-.47.346-.763.54a4.7 4.7 0 01-.78.4 2.376 2.376 0 01-.908.2h-.016a2.375 2.375 0 01-.908-.2 4.689 4.689 0 01-.78-.4q-.293-.194-.763-.54l-.289-.21-4.189 4.19a1.264 1.264 0 00.865.326z" />
                    <path transform="translate(0 -194.81)" d="M.833 199.273a4.374 4.374 0 01-.833-.718v6.372l3.692-3.692q-1.108-.773-2.859-1.962z" />
                    <path transform="translate(-402.216 -194.81)" d="M416.174 199.273q-1.685 1.141-2.865 1.965l3.69 3.69v-6.373a4.552 4.552 0 01-.825.718z" />
                    <path transform="translate(-.006 -59.013)" d="M13.469 59.013H1.326a1.178 1.178 0 00-.978.429 1.664 1.664 0 00-.342 1.072 1.928 1.928 0 00.454 1.127 4.093 4.093 0 00.965.953q.28.2 1.691 1.176l1.329.923.833.582.123.088.227.164q.268.194.445.314t.429.268a2.5 2.5 0 00.474.223 1.313 1.313 0 00.412.074h.016a1.313 1.313 0 00.412-.074 2.5 2.5 0 00.474-.223q.252-.149.429-.268.177-.119.445-.314l.227-.164.123-.088.835-.58 3.026-2.1a3.924 3.924 0 001.006-1.015 2.183 2.183 0 00.4-1.246 1.331 1.331 0 00-1.32-1.32z" />
                  </g>
                </svg>
                <span>
                  info@gym.com
                </span>
              </h4>
              <h4 className="text-white text-xs font-light flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917" className="h-4 w-4 mr-2 text-white fill-current">
                  <g transform="matrix(3.03102 0 0 3.03102 1.276 1.291)">
                    <path transform="translate(-.006 -44.544)" d="M12.626 55.525a1.163 1.163 0 00-1.758 0c-.411.408-.822.815-1.226 1.23a.242.242 0 01-.339.062c-.266-.145-.549-.263-.8-.421a12.753 12.753 0 01-3.074-2.8 7.284 7.284 0 01-1.1-1.765.253.253 0 01.062-.325c.411-.4.812-.8 1.216-1.213a1.168 1.168 0 000-1.8c-.321-.325-.643-.643-.964-.967-.321-.324-.66-.667-.995-.995a1.171 1.171 0 00-1.758 0c-.415.408-.812.826-1.233 1.226a2 2 0 00-.629 1.351 5.723 5.723 0 00.432 2.469A14.967 14.967 0 003.116 56a16.439 16.439 0 005.444 4.259 7.874 7.874 0 003.016.877 2.21 2.21 0 001.9-.722c.352-.394.75-.753 1.123-1.13A1.175 1.175 0 0014.6 57.5q-.982-.992-1.974-1.975z" />
                    <path transform="translate(-229.638 -92.684)" d="M241.6 100.912l1.275-.218A5.722 5.722 0 00238.034 96l-.18 1.282a4.422 4.422 0 013.745 3.631z" />
                    <path transform="translate(-234.368)" d="M248.323 2.688A9.4 9.4 0 00242.934 0l-.18 1.282a8.2 8.2 0 016.94 6.726l1.275-.218a9.468 9.468 0 00-2.646-5.102z" />
                  </g>
                </svg>
                <span>
                  +1 234 567 8901
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white w-4/5 xl:w-full">
        <p className="text-xs text-white text-center py-2">Copyright © 2019 GYM. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default footer;