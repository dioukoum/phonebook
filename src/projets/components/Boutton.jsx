import React from 'react'

export default function Boutton({icon,text,classes,onClick}) {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>{icon}{!text?'':text}</button>
  )
//    
}
