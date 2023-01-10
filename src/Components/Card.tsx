type CardProps = {
  details: { id: number, user: {name:string, age:string, email:string}}[];
  deleteDetails: (id: number) => void;
  editDetails: (id: number) => void;
};

function Card({details, deleteDetails, editDetails}:CardProps){
  return(
    <div className="right-side">
      <ul>
        {details.map((it)=>(
          <li key={it.id}> Name:{it.user.name} Age:{it.user.age} Email:{it.user.email} <br/>
          <button onClick={()=>editDetails(it.id)}>Edit</button>
          <button onClick={()=>deleteDetails(it.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Card;
