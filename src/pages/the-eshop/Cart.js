import React from 'react';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => {
    const itemCost = item.price * (item.quantity || 1);
    return acc + itemCost;
  }, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price} (Qty: {item.quantity})
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </p>
        </div>)
      )}
  
      <p>Total: ${total}</p>
    </div>
  );
}

export default Cart;
