import { createContext, useReducer, useEffect } from "react";
import shopReducer, { initialState } from "./ShopReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(shopReducer, initialState);


  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem(
      "cart_items",
      JSON.stringify({ total: state.total, products: state.products })
    );
  }, [state]);




  const calculateTotalPrice = (products) => {
		let total = 0;

		products.forEach((product) => {
			total += product.price * product.quantity;
		});

		dispatch({
			type: "CALCULATE_TOTAL_PRICE",
			payload: {
				total,
			},
		});
	};




  const addToCart = (product) => {

	const productId = product._id ? product._id : product.id;



	// Raadso badeecadda ku jirta `cart`-ka iyadoo la isticmaalayo `productId`
	const productIndex = state.products.findIndex((p) => p._id === productId || p.id === productId);
  
  
	console.log("productIndex:", productIndex);

    let updatedProducts = [...state.products];

    
    if (productIndex === -1) {
      // Haddii badeecadda aysan horey u jirin
      updatedProducts.push({ ...product, quantity: 1 });
    } else {
      // Haddii badeecadda horey u jirtay, quantity ayaa la kordhinayaa
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity: updatedProducts[productIndex].quantity + 1,
      };
    }


    calculateTotalPrice(updatedProducts);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProducts,
      },
    });
  };




  const removeFromCart = (productId) => {
	
	const updatedProducts = state.products.filter(
		(p) => (p._id ? p._id !== productId : p.id !== productId)
	  );
	

	calculateTotalPrice(updatedProducts);

	dispatch({
		type: "REMOVE_FROM_CART",
		payload: {
			products: updatedProducts,
		},
	});



  
	
	}




  const updateProdductQuantity = (product, newQuantity) => {


    const productIndex = state.products.findIndex((p) => p._id === product._id);
    console.log(productIndex ,"productIndex")
		let updatedProduct = [...state.products];
		// < 0
		if (newQuantity <= 0) {
			updatedProduct = updatedProduct.filter((p) => p._id === product._id);
		} else {
			updatedProduct[productIndex] = {
				...updatedProduct[productIndex],
				quantity: newQuantity
			};
		}

	
    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "UPDATE-QUANTITY",
      payload: {
        products: updatedProduct,
      },
    });







   

  }












  const value = {
	state,
    products: state.products,
    total: state.total,
    addToCart,
	removeFromCart,
  updateProdductQuantity,
  calculateTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
