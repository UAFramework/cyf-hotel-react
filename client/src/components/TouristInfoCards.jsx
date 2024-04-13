import React from 'react'
import './TouristInfoCards.css'
import GlasgowImage from '../assets/Glasgow.jpg'

const TouristInfoCards = () => {
   return (
    <div className='cardsContainer'>
      <div className='card1'>
        <img src={GlasgowImage} className='card-img-top' />
        <div className='card-body'>
          <p>
            The area around Glasgow has hosted communities for millennia, with the River Clyde providing a natural
            location for fishing. The Romans later built outposts in the area and, to protect Roman Britannia from the
            Brittonic speaking (Celtic) Caledonians, constructed the Antonine Wall. Items from the wall, such as altars
            from Roman forts like Balmuildy, can be found at the Hunterian Museum today.{' '}
          </p>
          <a href='peoplemakeglasgow.com' className='btn btn-primary'>
            more about Glasgow
          </a>
        </div>
      </div>
      <div className='card2'>
        <img
          src='../src/assets/Manchester_Town_Hall_from_Lloyd_St.jpg'
          className='card-img-top'
        />
        <div className='card-body'>
          <p>
          A centre of capitalism, Manchester was once the scene of bread and labour riots, as well as calls for greater political recognition by the city's working and non-titled classes. One such gathering ended with the Peterloo massacre of 16 August 1819. The economic school of Manchester Capitalism developed there, and Manchester was the centre of the Anti-Corn Law League from 1838 onward.
          </p>
          <a href='https://www.visitmanchester.com/' className='btn btn-primary'>
            more about Manchester
          </a>
        </div>
      </div>
      <div className='card3'>
        <img
          src='../src/assets/driving-london-car-640x360.webp'
          className='card-img-top'
        />
        <div className='card-body'>
          <p>
          Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.
          </p>
          <a href='https://www.visitlondon.com/' className='btn btn-primary'>
            more about London
          </a>
        </div>
      </div>
    </div>
  )
}

export default TouristInfoCards
