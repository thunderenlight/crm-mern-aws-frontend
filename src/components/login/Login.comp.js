import React, { useState } from 'react'
import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
const styles = {
            jumbotron: {
            padding: "2rem 1rem",
            backgroundColor: "#e9ecef",
            borderRadius: ".5rem",
        }
    }
  

  

export const Login = ({formSwitcher}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;
                
                case "password":
                    setPassword(value);
                    break;
                    
                    default:
                        break;
                    }
                };
                const handleOnSubmit = async e => {
                    e.preventDefault();
                    
                    if (!email || !password) {
                        return alert("Fill up all the form!");
                    }
                    console.log("fill her up!", email)
                }
                
                return (
        <Container style={styles.jumbotron}>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Enter password"
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Login </Button>
                    </Form>
                <hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<a href="#" onClick = {() => formSwitcher("reset")}>Forget Password?</a>
				</Col>
			</Row>
			
		</Container>
    )
}
Login.propTypes = {
	formSwitcher: PropTypes.func.isRequired,
};