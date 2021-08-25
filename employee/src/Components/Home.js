import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Home = () => {

    const [employee, setEmployee] = useState([]);

    // fetching list of employee from given api
    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then((response) => setEmployee(response.data))
            .catch(error => console.error(`Error: ${error}`));
    }, [])

    //delete employee from list
    const handleDelete = (id) => {
        setEmployee((oldEmployee) => {
            return oldEmployee.filter((arrElem, index) => {
                return index !== id;
            });
        });
    }


    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Employee userName</th>
                        <th>View Details</th>
                        <th>Delete</th>


                    </tr>
                </thead>
                <tbody>
                    {employee.map((list, index) => {
                        return (

                            <tr>
                                <td>{(index + 1)}</td>
                                <td >{list.login}</td>
                                <td><Link style={{ color: "inherit", textDecoration: "inherit" }} to={{ pathname: "/employeedetails", state: { detail: list } }}><VisibilityIcon /></Link></td>
                                <td><button type="text" onClick={(event) => { handleDelete(index) }}> <DeleteIcon /></button></td>
                            </tr>

                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default Home;