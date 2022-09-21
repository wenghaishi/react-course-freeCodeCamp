import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'


function Button() {
 

  return (
    <a href="mailto:wenghaishi1@gmail.com">
    <button  className='Button' >
      <EnvelopeIcon className='Mail-icon' />
      Email
    </button>
    </a>
  )
}

export default Button