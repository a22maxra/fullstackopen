const Persons = ({showList}) => {
return (
    <div>
        {showList.map(person => 
            <p key={person.name}>{person.name} {person.number}</p>
        )}
    </div>
)
}



export default Persons