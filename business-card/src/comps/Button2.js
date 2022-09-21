import React from 'react'

function Button2() {

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

  return (
    <button onClick={() => openInNewTab('https://www.linkedin.com/in/haishi-weng/')} className='Button Button-2' >
      <img className='Linkedin-icon' src="linkedin.png" alt="" />
      Linkedin
    </button>
  )
}

export default Button2