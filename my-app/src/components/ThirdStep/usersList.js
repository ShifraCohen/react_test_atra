import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import User from "./user";
import { Container, CardColumns } from "react-bootstrap";
import { useState } from 'react';

export default function UserList(props) {
    const [tempUsers, setTempUsers] = useState(...Array.from(props &&props?.users))
    // setTempUsers()
    const [userNodes, setUserNodes] = useState(
        tempUsers &&tempUsers.map((user) => {
            return (
                <User
                    name={user.name}
                    email={user.email}
                >
                </User>
            )
        }))
    console.log(userNodes);

    return (
        <div >
            hello
            <Container>

                {tempUsers &&tempUsers[0]}
                <CardColumns>
                    {userNodes &&userNodes}
                </CardColumns>

            </Container>
        </div>
    );
}
