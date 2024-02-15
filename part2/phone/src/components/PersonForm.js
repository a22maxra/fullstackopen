const PersonForm = ({setNewNumber, setNewName, setPersons, newName, newNumber, persons}) => {
    const addName = (event) => {
        event.preventDefault()
        const nameEntry = {
          name: newName,
          number: newNumber
        }
        const duplicate = persons.some(person => person.name === newName)
        if (duplicate) {
          alert(`${newName} has already been added to phonebook`)
        }
        else {
          setPersons(persons.concat(nameEntry))
          setNewName('')
          setNewNumber('')
        }
      }
    
      const handleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    
      const handleNewNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }

    return (
        <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName}></input>
          number: <input value={newNumber} onChange={handleNewNumber}></input>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
      </form>)
}

export default PersonForm