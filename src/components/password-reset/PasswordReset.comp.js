import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap'


export const ResetPassword = ({formSwitcher}) => {
    const [ email, setEmail] = useState();

    const handleOnChange = e => {
        const { value } =  e.target
        setEmail(value)
    }

    const handleOnResetSubmit = e => {
		e.preventDefault()
		console.log(email)
	}
	
    return (
        <Container>
			<Row>
				<Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
					{/* {isLoading && <Spinner variant="primary" animation="border" />} */}

					<Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

						<Button type="submit">Reset Password</Button>
					</Form>
					<hr />
				</Col>
				<a href="#!" onClick = {() => formSwitcher("login")}>Login now</a>

			</Row>
		</Container>
    )
}
