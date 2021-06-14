import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, Form } from 'react-bootstrap';




export default function RegisterModal(props) {



    async function registerUser(user) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify(user);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: body,
            redirect: 'follow'
        };

        return fetch("http://localhost:4200/registerUser", requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));




        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        // var body = JSON.stringify(user);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: body,
        //     redirect: 'follow'
        // };

        // return fetch("http://localhost:4200/registerUser", requestOptions)
        //     .then(response => response.json())
        //     .catch(error => console.log('error', error));

    }


    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    // const [user, setUser] = useState('')

    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handleNameChange = event => {
        setName(event.target.value)
    };
    const handleAgehange = event => {
        setAge(event.target.value)
    };
    const handleCityChange = event => {
        setCity(event.target.value)
    };
    const handlePhoneChange = event => {
        setPhone(event.target.value)
    };

    function validateForm() {
        return email.length > 0 && name.length > 0
            && phone.length > 0 && city.length > 0
            && age.length > 0;
    }
    const handleSubmit = async event => {
        event.preventDefault();
        let newUser = await registerUser({
            name,
            email,
            age,
            city,
            phone,
        })
        console.log(newUser);
    //   await  setUser(newUser) 
             console.log(newUser);

        // props.setToken(token);
        if (newUser) {
            props.setUser(newUser)
            console.log(props.user);
        }
        else {
            document.querySelector("#id").innerHTML = "Cannot Get User!"

        }        
            // props.onHide()

    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/*closeButton  */}
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" value={name} onChange={handleNameChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Text style={{ color: "red", fontSize: "18px" }} id="id">
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Age" value={age} onChange={handleAgehange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" value={city} onChange={handleCityChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button className="mt-3" variant="primary" type="submit" disabled={!validateForm()}>
                        Submit
                    </Button>
                </Form>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
