import { useState } from 'react'
 

const Display = ({persons}) => {
  console.log("one")
  return (
  <>
     {persons.map(person => 
        <li key={person.id}>
          {person.name}
        </li>
      )}
  </>
)}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1 } 
  ])
  const [newName, setNewName] = useState('')
 
const addEntry = (event) => {
  event.preventDefault()
  const newPerson = {
    name: newName,
    id: (persons.length + 1)
  }
  let check = false
  persons.forEach(person => {
    if (person.name === newPerson.name) {
      console.log("dup")
      check = true
    }
  })
  if (check === true) {
    setNewName('')
    alert(`${newName} is already submitted`)
    return
  }
  console.log("not dup");
  setPersons(persons.concat(newPerson))
  console.log("Submitted form", newName)
  console.log("Persons", persons)
  setNewName('')
}
 
const checkNote = (event) => {
  setNewName(event.target.value)
  console.log(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={checkNote}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Display persons={persons}/>
      </ul>
    </div>
  )
}
 
export default App