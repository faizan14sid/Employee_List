import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App';
import {Button} from 'react-bootstrap';

const Logout = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {

        dispatch({ type: "USER", payload: false })
        history.push('/login', { replace: true })

    })

    return (
        <div>
        <Button>Logout</Button>
        </div>
    )
}

export default Logout;