import React from 'react'
import {FaUserAlt,FaPhone} from 'react-icons/fa'
import {styled} from 'styled-components'
const ContactStyle=styled.li`
display:grid;
grid-template-columns:repeat(4,1fr);
align-items:center;
max-width:700px;
margin:0 auto;
padding:0.2rem 0.4rem;
border-bottom:1px solid #ccc;

&:hover{
    cursor:pointer;
    background:#666;
}
img{
    height:50px;
    border-radius:50%;
}
`
export default function Contact({icon,firstName,lastName,phoneNr}) {
  return (
    <ContactStyle>
    <div>
        {!icon ? <FaUserAlt className='text-info' /> :<img src={icon} alt=''/>}
    </div>
    <div>
        {!firstName ? "Dioukou M": firstName}
    </div>
    <div>
        {!lastName ? "SISSOKO": lastName}
    </div>
    <div>
        {!phoneNr ? "77 40 38 82": <a className='text-info' href={`tel:${phoneNr}`}>{phoneNr}<FaPhone className="text-sucess ml-1" /></a>}
    </div>
    </ContactStyle>
    
  )
}
