import React from 'react'

export default function Title({classes, text}) {
  return (
    <h1 className={!classes? "text-center":classes || "title-main"}>{!text?"Cours de react":text}</h1>
  )
}
