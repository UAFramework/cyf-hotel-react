import Search from './Search'
import SearchResults from "./SearchResults";
import FakeBookings from '../data/fakeBookings'

const Bookings = () => {
  const search = (searchVal) => {
    console.info('TODO!', searchVal)
  }
  return (
    <div className='App-content'>
      <div className='container'>
        <Search search={search} />
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  )
}

export default Bookings
