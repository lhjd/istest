const dots = () => {
  let rowOfDots = [...Array(11)].map((e, i) => <div className="h-1 w-1 bg-brand-gray200 rounded-full mx-2" key={i}></div>);
  let gridOfDots = [...Array(11)].map((e, i) => <div className="flex my-4" key={i}>{rowOfDots}</div>);

  return gridOfDots;
}

export default dots;