import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    const signIn = () => {

        dispatch({ type: "USER", payload: true })
        window.alert("Login successfull");
        history.push('/')

    };

    return (

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={signIn}>
                Submit
            </Button>
        </Form>

    )
}

export default Login
