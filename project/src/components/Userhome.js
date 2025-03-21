import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminManageUser() {
    const [doclist, setDocList] = useState([]);
    const [msg, setMessage] = useState("");
    const navigate = useNavigate();  // Hook for navigation

    const loggedInUser = sessionStorage.getItem("username") || "Guest"; // Fetch logged-in user

    useEffect(() => {
        axios.get('http://localhost:5000/admin/userhome/')
            .then(response => {
                setDocList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function handleBook(docname) {
        navigate('/docbook', { state: { docname, username: loggedInUser } }); 
    }

    function viewDocList() {
        return doclist.map((currentrow, index) => (
            <tr key={index}>
                <td>{currentrow.docid}</td>
                <td>{currentrow.docname}</td>
                <td>{currentrow.docemail}</td>
                <td>{currentrow.docmobile}</td>
                <td>{currentrow.docexp}</td>
                <td>{currentrow.docspec}</td>
                <td>{currentrow.docgender}</td>
                <td>{currentrow.docqualification}</td>
                <td>{currentrow.docfees}</td>
                <td>
                    <button onClick={() => handleBook(currentrow.docname)} style={{width:'100px'}}>Book</button>
                </td>
            </tr>
        ));
    }

    return (
        <div>
            <Navbar />
            <h3 style={{textAlign:'center'}}>Doctor List</h3>
            <b style={{ color: "red" }}>{msg}</b>
            <table border="1">
                <thead>
                    <tr>
                        <th>Doctor ID</th>
                        <th>Doctor Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Experience</th>
                        <th>Spec</th>
                        <th>Gender</th>
                        <th>Qualification</th>
                        <th>Fees</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{viewDocList()}</tbody>
            </table>
        </div>
    );
}

export default AdminManageUser;
