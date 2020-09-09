const trainerPhoto = (props) => {
  return (
    <div className="w-76 overflow-hidden">
      <img src={props.imgUrl} alt="Body Building" className="h-76 w-full object-cover object-top" />
    </div>
)
}

export default trainerPhoto;