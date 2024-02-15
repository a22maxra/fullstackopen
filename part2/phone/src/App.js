import { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0701234567' }
  ])   
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterList, setFilterList] = useState('')
  const showList = persons.filter(person => person.name.toLowerCase().includes(filterList))
  return (
    <div>
      <h2>Filter list</h2>
      <Filter setFilterList={setFilterList}></Filter>
      <h2>Phonebook</h2>
      <PersonForm setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}
      newName={newName} newNumber={newNumber} persons={persons}></PersonForm>
      <h2>Numbers</h2>
      <Persons showList={showList}></Persons>
    </div>
  )
}

export default App