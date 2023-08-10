import { useState } from 'react'
import ContactList from './components/ContactList'
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  console.log(selectedContactId)
  return (
    <>
      {selectedContactId === null ? <ContactList setSelectedContactId={setSelectedContactId} /> : <div>Selected View</div>}
    </>
  )
}

export default App
