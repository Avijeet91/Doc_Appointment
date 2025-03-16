//STEP 1 -- IMPORT REACT
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function AdminManageUser() {
    const [doclist, setDocList] = useState([]);
    const [msg, setMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/admin/deldoc')
            .then(response => {
                console.log(response.data)
                setDocList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function viewDocList() {
        return doclist.map((currentrow, index) => {
            return (
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
                        <button onClick={() => removeRow(index)}>Delete</button>
                    </td>
                </tr>
            );
        });
    }

    function removeRow(index) {
        var tempemplist = [...doclist]; // make a new copy of array instead of mutating the same array directly. 
        let removerow = tempemplist.splice(index, 1);
        console.log(removerow[0].docemail)

        axios.delete('http://localhost:5000/admin/deldoc/' + removerow[0].docemail)
            .then(res => {
                console.log(res.data)
                setMessage('SUCCESSFULLY DELETED')
                setDocList(tempemplist)
            })
            .catch(err => {
                console.log(err)
                setMessage('PROBLEM....')
            })
    }

    return (
        <div>
            <Navbar />
            <br/>
            <h3 style={{ 
            textAlign: "center", 
            marginTop: "20px" 
        }}>ALL DOCTOR DETAILS</h3>

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
                    </tr>
                </thead>

                <tbody>
                    {viewDocList()}
                </tbody>
            </table>
        </div>)
}


//STEP 3 -- EXPORT IT TO USE IT
export default AdminManageUser