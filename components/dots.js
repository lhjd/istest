const dots = () => {
  let rowOfDots = [...Array(11)].map((e, i) => <div className="dot bg-gray-200 rounded-full mx-2" key={i}></div>);
  let gridOfDots = [...Array(11)].map((e, i) => <div className="flex my-4" key={i}>{rowOfDots}</div>);

  return gridOfDots;
}

export default dots;