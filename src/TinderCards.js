import React, { useState } from 'react'

function tinderCards() {
  const [people, setPeople] = useState([
  {
    name: 'Richard Hendricks',
    url: ''
  },
  {
    name: 'Mark Zuckerberg',
    url: ''
  }

  ]);
  

  return (
    <div>
      <h1>Tinder Cards</h1>
    </div>
  )
}

export default tinderCards
