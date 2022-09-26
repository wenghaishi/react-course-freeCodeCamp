import React from 'react'

function NavBar() {
  return (
    <nav>
        <img src="airbnb 1.png" alt="" />
            <button className='button-home'
                onClick={() => {
                  alert('clicked');
                }}
              >
                Explore
           </button>

    </nav>
  )
}

export default NavBar