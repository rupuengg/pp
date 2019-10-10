import React from 'react'

const Main = (props) => {
  const query = new URLSearchParams(props.location.search);
  console.log('api_key', query.get('api_key'));
  console.log('api_key', query.get('secert_key'));
  console.log('amount', query.get('amount'));
  console.log('order_id', query.get('order_id'));
  return (
    <div className="payment-container">
      <div className="loading">
        <h1>Processing...</h1>
      </div>
    </div>
  )
}

export default Main;