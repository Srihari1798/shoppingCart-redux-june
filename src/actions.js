  export const fetchProducts = () => {
  return (dispatch) => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const products = data.products;
        dispatch({
          type: 'SET_PRODUCTS',
          payload: products,
        });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };
};

  
  export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  
  export const clearCart = () => {
    return {
      type: 'CLEAR_CART',
    };
  };
  