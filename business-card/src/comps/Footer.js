import React from 'react'

function Footer() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <div className='Footer-box' >
        <img onClick={() => openInNewTab('https://github.com/wenghaishi')} className='Footer-icons' src="GitHub-Icon.png" alt="" />
        <img onClick={() => openInNewTab('https://www.instagram.com/believeinsamm/')}  className='Footer-icons' src="Instagram-Icon.png" alt="" />
        <img onClick={() => openInNewTab('https://twitter.com/SamFandG')}  className='Footer-icons' src="Twitter-Icon.png" alt="" />
    </div>
  )
}

export default Footer