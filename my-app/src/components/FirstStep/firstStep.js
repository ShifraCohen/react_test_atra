import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import RegisterModal from './register'
import Button from 'react-bootstrap/Button';

import { connect } from "react-redux";
import { actions } from "../../Redux/action"
import { propTypes } from 'react-bootstrap/esm/Image';

function mapStateToProps(state) {
    return {
        users: state.userReducer.users,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        registerUser: (user) => dispatch(actions.loginUser(user))
        // addProduct: (product) => dispatch(actions.addProduct(product)),
        // deleteProduct: (productIndex) => dispatch(actions.deleteProduct(productIndex)),
        // updateProductQuantity: (productQuantity) => dispatch(actions.updateProductQuantity(productQuantity)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(function Home(props) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!user) {
                setModalShow(true)

            }


        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const [modalShow, setModalShow] = React.useState(false);
    // const [token, setToken] = useState();
    // const [userName, setUserName] = useState();
    const [user, setUser] = useState();


    return (
        <><p>
            <h1 className="pt-5" style={{ color: "rgb(255, 160, 116" }}>{user?.name ? `Hello ${user.name}!` : `Hello Guest`}</h1>

        </p>
            <RegisterModal
                show={modalShow}
                onHide={() => { setModalShow(false) }}
                // setToken={props.setToken}
                setUser={setUser}
                user={user}
            // loginUser={props.loginUser}
            />

        </>
    );
});


