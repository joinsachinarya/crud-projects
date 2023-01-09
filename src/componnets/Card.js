function Card({ details, deleteDetails, editDetails }) {
    return (
        <div className="right-side">
            <ul>
                {details.map((it) => (
                    <li key={it.id}>
                        {it.name}, {it.age}, {it.email}<br />
                        <button onClick={() => deleteDetails(it.id)}>Delete</button>
                        <button onClick={() => editDetails(it.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Card;