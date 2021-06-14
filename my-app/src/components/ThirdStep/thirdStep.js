import React,{useEffect} from "react";
import { connect } from "react-redux";
import UsersList from "./usersList";
import {actions} from '../../Redux/action'
function mapStateToProps(state) {
    return {
        
        users: state.userReducer.users,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => dispatch(actions.getAllUsers())
        // addProduct: (product) => dispatch(actions.addProduct(product)),
        // deleteProduct: (productIndex) => dispatch(actions.deleteProduct(productIndex)),
        // updateProductQuantity: (productQuantity) => dispatch(actions.updateProductQuantity(productQuantity)),
    };
} export default connect(mapStateToProps, mapDispatchToProps)(function ShowAllUsers(props) {
    
    useEffect(async() => {
       await props.getAllUsers()
    }, []);
    return (
        <>
            <div className="row">

                <div >
                    <h1 className="mt-4">Users List - Using Redux</h1>

                    <UsersList users={props.users} />
                    <br />
                </div>
               
            </div>


        </>
    );
}
)
