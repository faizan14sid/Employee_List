import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App';

const Logout = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {

        dispatch({ type: "USER", payload: false })
        history.push('/login', { replace: true })

    })

    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}

export default Logout;