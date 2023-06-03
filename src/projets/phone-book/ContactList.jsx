import React from 'react'
import Contact from './Contact'
export default function ContactList({contacts}) {
  const generateRandomImg=()=>{
    const types=[
      "bottts-neural",
      "personas",
      "identicon",
      "avataars",
      "adventurer-neutral",
      "big-smile",
      "micah"
    ]
    console.log(types)
    return types[Math.floor(Math.random()*types.length)]
  }
  return (
    <ul>
        {contacts.map((contact,id)=>{
         return (<Contact icon={`https://api.dicebear.com/6.x/${generateRandomImg()}/svg`}       key={id} firstName={contact.last_name} lastName={contact.first_name} phoneNr={contact.phone}/>)
        })}
    </ul>
  )
}
