import React, { useState } from 'react';

function Shop() {
  const [shopQty, setShopQty] = useState(10); // Quantity in shop
  const [cartQty, setCartQty] = useState(0); // Quantity in cart

  const handleAddItem = () => {
    if (shopQty > 0) {
      setShopQty(shopQty - 1);
      setCartQty(cartQty + 1);
    }
  };

  const handleRemoveItem = () => {
    if (cartQty > 0) {
      setShopQty(shopQty + 1);
      setCartQty(cartQty - 1);
    }
  };

  return (
    <div>
      {/* Display item in shop */}
      <div>
        In shop - Item 1 qty {shopQty}
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Display item in cart */}
      <div>
        In cart - {cartQty > 0 ? `Item 1 qty ${cartQty}` : 'Empty'}
        {cartQty > 0 && <button onClick={handleRemoveItem}>Remove Item</button>}
      </div>
    </div>
  );
}

export default Shop;
