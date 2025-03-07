//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminViewUser() {
    const [booklist, setBookList] = useState([]);
    const [msg, setMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/admin/viewbook/')
            .then(response => {
                console.log(response.data)
                setBookList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewBookList() {
        return booklist.map((currentrow, index) => {
            return (
                <tr key={index}>
                    <td>{currentrow.bdocname}</td>
                    <td>{currentrow.busername}</td>
                    <td>{currentrow.bdate}</td>
                </tr>
            );
        });
    }


    return (
        <div>
            <Navbar />
            <br />
            <h3>Appoinment List</h3>

            <b style={{ color: "red" }}>{msg}</b>

            <table border="1">
                <thead>
                    
                    <tr>
                        <th>Doctor Name</th>
                        <th>Patient Name</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {viewBookList()}
                </tbody>
            </table>
        </div>)
}


//STEP 3 -- EXPORT IT TO USE IT
export default AdminViewUser