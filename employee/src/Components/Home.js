import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';


const Home = () => {

    const [employee, setEmployee] = useState([]);
    const location = useLocation();
    const username = location.state.detail;


    // fetching list of employee from given api
    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then((response) => setEmployee(response.data))
            .catch(error => console.error(`Error: ${error}`));

    }, [])

    //show new added employee
    useEffect(() => {
        setEmployee([...employee, username]);
        console.log("hiii")
    }, [username]);


    console.log(employee)

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
                                <td><Button type="text" variant="danger" onClick={(event) => { handleDelete(index) }}> <DeleteIcon /></Button></td>
                            </tr>

                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default Home;