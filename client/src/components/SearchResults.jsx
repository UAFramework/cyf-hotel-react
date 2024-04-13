import React, {useState} from 'react';
import moment from 'moment';
moment().format();

const CountNumberOfNights = (checkInDate, checkOutDate) => {
    let a = moment(checkInDate);
    let b = moment(checkOutDate);
    return b.diff(a, "days");
  };

const SearchResults = ({ results }) => {
  const [selectedRows, setSelectedRows] = useState([]);
   const selectedClicks = (bookingId) => {
    setSelectedRows((selectedClickedRows) => {
      if (selectedClickedRows.includes(bookingId)) {
      return selectedClickedRows.filter((id) => id !== bookingId)
  } else {
      return [...selectedClickedRows, bookingId];
  }
});
}

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
          {results.map(({ id, title, firstName, surname, email, roomId, checkInDate, checkOutDate }) => (
            <tr key={id}  className={selectedRows.includes(id) ? "selected-row" : ""}
            onClick={() => selectedClicks(id)}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>{CountNumberOfNights(checkInDate, checkOutDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SearchResults
