import React from 'react'
import Boutton from '../components/Boutton'
import {FaAddressBook, FaArrowsAlt} from 'react-icons/fa'

export default function Search({handleToggleContact}) {
  return (
    <div className='mt-3' style={{display:'flex',justifyContent:'center'}}>
      <Boutton icon={<FaArrowsAlt />}  text='' classes={'btn-dark mr-2'}/>
      <input type="search"  placeholder='Rechercher par nom..'/>
      <Boutton icon={<FaAddressBook />}  text='' classes={'btn-dark mr-2'} onClick={handleToggleContact}/>
    </div>
  )
}
