
/**
 const results = [
    {
      id, title, firstName, surname, email, roomId, checkInDate, checkOutDate
    },
    {...},
    {...}
  ]
 */

/**
    imports FakeBookings from "./data/fakeBookings"

    const Bookings = () => {

      <SearchResults results = {FakeBookings} blah={"Blah-Blah-Blah"}/>
    }


    const SearchResults = (props) => {
        return (
          <>
            <p>{props.blah}</p>
            props.results.map(...);
          </>
        );
    }


    const SearchResults = ({blah, results}) => {
        return (
          <>
            <p>{blah}</p>
            results.map(...);
          </>
        );
    }
   */

const SearchResults = ({ results }) => {
  return (
    <>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Title</th>
            <th scope='col'>First Name</th>
            <th scope='col'>SurName</th>
            <th scope='col'>e-mail</th>
            <th scope='col'>room id</th>
            <th scope='col'>check in date</th>
            <th scope='col'>check out date</th>
            <th scope='col'>number of nights</th>
          </tr>
        </thead>
        <tbody>
          {
            // result = {
            //   id, title, firstName, surname, email, roomId, checkInDate, checkOutDate
            // },

            /**
        const props = {
            results: [
              {
                id: ..., title: ..., firstName, surname, email, roomId, checkInDate, checkOutDate
              },
              {...},
            ]
        }

        const SearchResults = ({results}) => { return ... }

        const callbak = (...) => { return ...};
        array.map(callback);
       */

            results.map(({id, title, firstName, surname, email, roomId, checkInDate, checkOutDate }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>a.diff(b, 'days')</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}


// To get the difference in another unit of measurement, pass that measurement as the second argument.

// var a = moment([2007, 0, 29]);
// var b = moment([2007, 0, 28]);
// a.diff(b, 'days') // 1

export default SearchResults
