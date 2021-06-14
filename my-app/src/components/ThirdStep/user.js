import React from "react";
import { Card } from "react-bootstrap";


export default function User(props) {
    

    return (
        <Card className="mb-2" style={{ color: "black" }}>
           

            
            <Card.Body>
                <Card.Title>
                    <h3>  {props.name}</h3>

                </Card.Title>

                <Card.Text>
                    <h4> email : {props.email}<br /></h4>

                    
                </Card.Text>

               

            </Card.Body>
        </Card>
    );
}
