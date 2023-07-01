import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './actions';

const MyCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('Items have been checked out.');
  };

  return (
    <>
    <h1>My Cart</h1>
    <div style={{display:'flex',marginTop:'50px',gap:'20px'}}>
     
      {cart.map((item) => (
        <div style={{border:'1px solid black',padding:'10px'}} key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)} style={{backgroundColor:'black',color:'white'}}>
            Remove from Cart
          </button>
        </div>
      ))}
      <div style={{marginLeft:'500px'}}>
        <h3>Checkout</h3>
        <p>Total: ${total}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
    </>
  );
};

export default MyCart;
