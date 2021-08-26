import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(100),
            backgroundColor: 'lightyellow',
            height: theme.spacing(80),
        },
    }
}));

const Employee = () => {
    const classes = useStyles();
    const location = useLocation();
    const list = location.state?.detail;
    const [empDetails, setEmpDetails] = useState([]);


    //fetching url inside api 
    useEffect(() => {
        axios.get(list.url)
            .then((response) => setEmpDetails(response.data))
            .catch(error => console.error(`Error: ${error}`));
        console.log("hii")
    }, [list.url])

    const handleOnChange = (e) => {
        setEmpDetails(e.target.value)
    }

    return (
        <div className={classes.root}>

            <Paper elevation={3}>
                <h2><u>" Employee Details "</u></h2>
                <img src={empDetails.avatar_url} style={{ height: 100, width: 100, borderRadius: 50 }} />
                <div style={{ margin: 40 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}> <div style={{ marginTop: 10 }}>
                        <label> Employee Name : </label>
                        <input
                            type="text"
                            value={empDetails.name}
                            onChange={handleOnChange}
                        ></input>
                    </div>
                        <div style={{ marginTop: 10 }}>
                            <label> Employee Id : </label>
                            <input
                                type="text"
                                value={empDetails.id}
                                onChange={handleOnChange}
                            ></input>
                        </div>
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label> Company Name : </label>
                        <input
                            style={{ width: 450 }}
                            type="text"
                            value={empDetails.company}
                            onChange={handleOnChange}
                        ></input>
                    </div>

                    <div style={{ marginTop: 10 }}>
                        <label> Location : </label>
                        <input
                            type="text"
                            value={empDetails.location}
                            onChange={handleOnChange}
                        ></input>
                    </div>


                </div>
                <Divider variant="middle" />
                <div style={{ marginTop: 20 }}>
                    <div style={{ marginTop: 10 }}>
                        <label>  Public repos : </label>
                        <input
                            type="text"
                            value={empDetails.public_repos}
                            onChange={handleOnChange}
                        ></input>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label>  Followers : </label>
                        <input
                            type="text"
                            value={empDetails.followers}
                            onChange={handleOnChange}
                        ></input>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <label> Following : </label>
                        <input
                            type="text"
                            value={empDetails.following}
                            onChange={handleOnChange}
                        ></input>
                    </div>
                </div>
            </Paper>
        </div>

    )
}

export default Employee;

