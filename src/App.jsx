import Bookings from './components/Bookings'
import Header from './components/Header'
import TouristInfoCards from './components/TouristInfoCards'
import Restaurant from './components/Restaurant'
import Footer from './components/Footer'

import './App.css'

const App = () => {
  const contacts = ['123 Fake Street, London, E1 4UD', 'hello@fakehotel.com', '0123 456789']

  return (
    <div className='App'>
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer contacts={contacts} />
    </div>
  )
}

export default App
