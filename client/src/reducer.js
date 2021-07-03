// reducer: how the action is dispatched and how will wepull that data


export const initialState={
    cart: []
};


//Selector
export const getSubtotal = (cart) => 
  cart.reduce((acc, item ) => parseInt(item.price) + parseInt(acc), 0)

const reducer = (state, action)=> {
    //whenever add to car is clicked it will dispatch an action with this type
    switch(action.type)
    {
        case "ADD_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

            case "USER":
                return{
                    ...state,
                    user: action.user
                };

                case "REMOVE FROM CART":
                    const index = state.cart.findIndex(
                        (item) => item.id === action.id
                    );
                    const newCart = [...state.cart];

                    if(index >= 0){
                        newCart.splice(index, 1);
                    }else{
                        console.log("product not found")
                    }
                    return {
                        ...state,
                        cart: newCart
                    };

                    case "CLEAR CART":
                        return{
                            ...state,
                            cart: []
                        };


            default:
                return state;
    }
};

export default reducer