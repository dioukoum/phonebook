import React, {useState} from 'react'
import Title from "../components/Title"
import ContactList from './ContactList'
import {getcontacts} from './db'
import Search from './Search'

export default function PhoneBook() {
  let dbContacts = getcontacts()
  const [showContacts,setShowContact]=useState(true)
 const toggleContact = ()=>{
    // showContacts?setShowContact(false):setShowContact(true);
    setShowContact(!showContacts)
 }
  return (
    <div>
        <Title classes={""} text={"Liste de contacts"}/>
        {/* CONTACT */}
        <main className='bg-dark text-light p-1'>
        <Search handleToggleContact={toggleContact}/>
            {/* <ContactList /> */}
            <div style={{height:650, overflow:"auto"}}>
              <h2 className='subtitle text-center'>Afficher les contacts</h2>
              {showContacts && <ContactList contacts={dbContacts} />}
            </div>
        </main>
    </div>
  )
}
