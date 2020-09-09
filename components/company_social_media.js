import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const companySocialMedia = () => {
  return (
    <div className="flex items-center mt-3 text-white">
      <a 
        href="https://www.facebook.com"
        target="_blank" 
      >
        <FontAwesomeIcon 
          icon={['fab', 'facebook-f']}
          className='h-5 w-5 mr-4'
        />
      </a>
      <a 
        href="https://www.google.com"
        target="_blank" 
      >
        <FontAwesomeIcon 
          icon={['fab', 'google-plus-g']}
          className='h-8 w-8 mr-4'
        />
      </a>
      <a 
        href="https://www.twitter.com"
        target="_blank" 
      >
        <FontAwesomeIcon 
          icon={['fab', 'twitter']}
          className='h-6 w-6 mr-4'
        />
      </a>
      <a 
        href="https://www.instagram.com"
        target="_blank" 
        >
        <FontAwesomeIcon 
          icon={['fab', 'instagram']}
          className='h-6 w-6 mr-4'
        />
      </a>
  </div>
  );
}

export default companySocialMedia;