import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const trainerProfile = (props) => {
  return (
    <div className="w-76 h-76 p-6 flex flex-col justify-center">
      <h3 className="uppercase font-bold text-brand-primary">{props.name}</h3>
      <h4 className="text-sm text-brand-secondary">{props.title}</h4>
      <hr className="my-2" />
      <p className="text-2xs text-brand-secondary">{props.bio}</p>
      <div className="flex items-center mt-3">
        <a 
          href={props.socialMedia.facebook} 
          target="_blank" 
          className={props.socialMedia.facebook ? 'cursor-pointer' : 'cursor-not-allowed'}
        >
          <FontAwesomeIcon 
            icon={['fab', 'facebook-f']}
            className={props.socialMedia.facebook ? 'h-5 w-5 mr-4 fill-current text-brand-primary' : 'h-5 w-5 mr-4'}
          />
        </a>
        <a 
          href={props.socialMedia.googlePlus} 
          target="_blank" 
          className={props.socialMedia.googlePlus ? 'cursor-pointer' : 'cursor-not-allowed'}
        >
          <FontAwesomeIcon 
            icon={['fab', 'google-plus-g']}
            className={props.socialMedia.googlePlus ? 'h-8 w-8 mr-4 fill-current text-brand-primary' : 'h-8 w-8 mr-4'}
          />
        </a>
        <a 
          href={props.socialMedia.twitter} 
          target="_blank" 
          className={props.socialMedia.twitter ? 'cursor-pointer' : 'cursor-not-allowed'}
        >
          <FontAwesomeIcon 
            icon={['fab', 'twitter']}
            className={props.socialMedia.twitter ? 'h-6 w-6 mr-4 fill-current text-brand-primary' : 'h-6 w-6 mr-4'}
          />
        </a>
        <a 
          href={props.socialMedia.instagram} 
          target="_blank" className={props.socialMedia.instagram ? 'cursor-pointer' : 'cursor-not-allowed'}>
          <FontAwesomeIcon 
            icon={['fab', 'instagram']}
            className={props.socialMedia.instagram ? 'h-6 w-6 mr-4 fill-current text-brand-primary' : 'h-6 w-6 mr-4'}
          />
        </a>
      </div>
    </div>
  )
}

export default trainerProfile;