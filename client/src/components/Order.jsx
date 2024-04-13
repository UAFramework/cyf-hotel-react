import React, { useLayoutEffect, useState } from 'react'
import RestaurantButton from './RestaurantButton'

function Order({ orderType }) {
  const [orders, setOrders] = useState(0)
  function orderOne() {
    setOrders(orders + 1)
  }
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  )
}

export default Order