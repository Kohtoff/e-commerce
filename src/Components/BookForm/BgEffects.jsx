import React from 'react'

export default function BgEffects() {
  return (
    <>
        <iframe
        scrolling="no"
        className="bg-effects"
        title="bg-effects"
        src={process.env.PUBLIC_URL + 'BgEffects.svg'}></iframe>
      <iframe
        scrolling="no"
        className="person-svg"
        title="person-svg"
        src={process.env.PUBLIC_URL + 'person.svg'}
      />
    </>
  )
}
