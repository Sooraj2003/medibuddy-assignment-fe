const LabsVisited = ({data}) => {
    const {name,location,url}=data;
  return (
    <div className="card w-2/3 shadow-xl bg-white">
  <figure>
    <img
    className=""
      src={url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{name}</h2>
    <p className="text-sm md:text-lg text-slate-600"><img className="inline-block mx-0 md:mx-1" src="src\assets\Location GPS.svg"/>{location}</p>
    
  </div>
</div>
  )
}

export default LabsVisited
