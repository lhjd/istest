const classInfo = (props) => {
  return (
    <div className="w-56 bg-brand-primary text-white rounded-lg overflow-hidden mx-2 mb-4">
      <img src={`${props.imgUrl}`} alt="Body Building" className="h-56 w-full object-cover object-top" />
      <div className="p-3">
        <h3 className="text-lg mb-2">{props.name}</h3>
        <div className="flex items-center">
          <img src="/images/clock.svg" alt="Class Schedule" className="mr-2" />
          <h4 className="text-sm">{props.schedule}</h4>
        </div>
      </div>
    </div>
  );
}

export default classInfo;