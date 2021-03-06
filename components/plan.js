const plan = (props) => {
  return (
    <div className={`border rounded-lg p-2 xl:p-4 flex flex-col items-center w-76 mb-4 mx-2 xl:mx-4 ${props.highlight ? 'border-brand-primary' : 'border-brand-gray100'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.5 63.5" className={`hidden xl:block h-32 w-32 mt-8 fill-current ${props.highlight ? 'text-brand-primary' : 'text-brand-gray200'}`}>
        <path d="M15.468 49.593c-1.88-.371-2.861-1.613-3.05-3.857l-.092-1.1H10.64c-3.21 0-3.87-.798-4.434-5.358a90.786 90.786 0 01-.238-2.02c0-.057-.433-.148-.963-.204-2.678-.28-3.681-1.703-3.681-5.224 0-3.366.852-4.484 3.706-4.86l1.235-.163-.09-1.068c-.321-3.84 1.231-5.83 4.557-5.84l1.642-.005v-1.376c0-3.298 1.072-4.51 4.175-4.722 5.32-.361 5.968.467 6.046 7.74l.053 4.844h18.37l.051-4.925c.074-7.173.394-7.646 5.175-7.646 3.543 0 4.884 1.087 4.884 3.96v.88l1.82.08c3.233.142 3.927.983 4.418 5.355.268 2.387.229 2.296.993 2.296 2.723 0 3.82 1.485 3.82 5.174 0 3.57-1.052 4.915-3.84 4.915h-.965v1.593c0 4.056-1.265 5.55-4.671 5.515l-1.548-.016-.054 1.779c-.102 3.434-1.688 4.623-5.846 4.386-3.732-.213-4.216-1.159-4.216-8.242V36.63H22.65l-.054 5.09c-.06 5.798-.127 6.11-1.536 7.185-1.035.789-3.53 1.097-5.591.69zm3.38-2.223c1.497-.246 1.372 1.181 1.372-15.634 0-17.415.262-15.648-2.338-15.742-1.77-.064-2.685.14-2.984.663-.461.806-.36 29.677.106 30.314.335.458 2.265.658 3.844.399zm29.503-.254c.55-.361.55-.34.5-15.807-.054-17.086.24-15.225-2.424-15.312-2.101-.069-2.725.149-2.985 1.042-.414 1.424-.135 29.437.299 29.898.573.61 3.762.734 4.61.179zm-35.978-14.81v-10.09h-1.354c-2.677 0-2.52-.67-2.459 10.463.058 10.52-.14 9.715 2.38 9.715h1.433zm41.963 8.724c.709-.367.715-.45.715-10.14 0-10.61.194-9.795-2.331-9.795h-1.433V41.273h1.29c.839 0 1.453-.085 1.759-.243zM6.127 31.985v-2.723h-.88c-1.184 0-1.458.285-1.606 1.668-.291 2.713.19 3.777 1.707 3.777h.78zm34.751-.48v-2.723H22.622v5.445h18.256zm18.705 2.342c.22-.22.282-.648.324-2.23.067-2.49-.117-2.835-1.505-2.835h-.869v5.484l.889-.073c.54-.045.996-.18 1.16-.346z"/>
      </svg>
      <h3 className="text-xl font-bold mb-2">{props.name}</h3>
      <h4 className="text-xs text-brand-secondary text-center">{props.desc1}</h4>
      <h4 className="text-xs text-brand-secondary text-center mb-5 md:mb-10 pb-2 px-4 border-b border-gray-500">{props.desc2}</h4>
      { props.currentPlan === 'annual' ?
        <h3 className="text-xl font-bold mb-4 xl:mb-10">{`$${props.pricePerYear}`}/Year</h3>
        :
        < h3 className="text-xl font-bold mb-4 xl:mb-10">{`$${props.pricePerMonth}`}/Month</h3>
      }
      <button className={` px-4 py-2 rounded mb-4 xl:mb-8 ${props.highlight ? 'bg-brand-primary text-white' : 'bg-white text-black border border-black'}`}>Get Started</button>
    </div>
  );
}

export default plan;