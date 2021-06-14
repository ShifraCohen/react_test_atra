import produce from 'immer'
import createReducer from "./ReducerUtils";

const initialState = {
    users: [
        
    ]
    
}

const userFunctions = {
    getAllUsers(state, action) {
       
    },
    setUsers(state, action) {
        state.users=action.payload;
    },

    // loginUser(state, action) {
    //     let user = user.find(u => u.email === action.payload.email && u.password === action.payload.password)
    //     return user;
    // },

    // addProduct(state, action) {
    //     let user = state.users.find(u => u.id === action.payload.userId)
    //     user.shoppingCart.push(action.payload.product);
    // },

    // deleteProduct(state, action) {
    //     let user = state.users.find(u => u.id === action.payload.userId)
    //     user.shoppingCart = [...user.shoppingCart.filter(p => p.cartProductId !== action.payload.cartProductId)]
    // },

    // updateAmount(state, action) {
    //     let user = state.users.find(u => u.id === action.payload.userId)
    //     for (const product of state.shoppingCart) {
    //         if (product.cartProductId === action.payload.cartProductId)
    //             product.amount = action.payload.amount;
    //     }
    // },

};
export default produce((state, action) => createReducer(state, action, userFunctions), initialState);