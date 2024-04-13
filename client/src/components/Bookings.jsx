import React, {useState, useEffect} from 'react';
import Search from './Search'
import SearchResults from "./SearchResults";
import FakeBookings from '../data/fakeBookings'

const Bookings = () => {

  const [bookings, setBookings] = useState(FakeBookings);

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me")
  //   .then(response => response.json())
  //   .then(json => setBookings(json))
  //   .catch(error => console.log("Error fetching data:", error));
  // }, []);

  const search = (searchVal) => {
    console.info('TODO!', searchVal)
  }


  return (
    <div className='App-content'>
      <div className='container' >
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  )
}

export default Bookings;
