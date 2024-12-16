const CarritoReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART": {
            const exist = state.cart.find((item) => item.id === action.payload.id);
        
            if (exist) {
                // Si ya existe, actualiza la cantidad sumándola
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, cantidad: action.payload.cantidad,

                                sugerencia: action.payload.sugerencia, // Actualiza la sugerencia
                                subTotal: action.payload.subTotal

                             }
                            : item
                    ),
                };
            } else {
                // Si no existe, agrégalo con la cantidad seleccionada
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload }],
                };
            }
        }
        
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: [...state.cart.filter((c) => c.id !== action.payload.id)],           
             }
        case "CLEAR_CART":
            return { cart: []}
        default:
            return state
    }

}
 
export default CarritoReducer