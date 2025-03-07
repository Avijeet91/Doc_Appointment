
//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React, { useState } from "react";
import Navbar from './Navbar'
import axios from 'axios';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adddoc() {
    const [did, setDocId] = useState("");
    const [dname, setDocName] = useState("");
    const [dmobile,setDocMobile] = useState("");
    const [demail, setDocEmail] = useState("");
    const [dexp, setDocExp] = useState("");
    const [dspec, setDocSpec] = useState("");
    const [dgender, setDocGender] = useState("");
    const [dqualification,setDocQualification] = useState("");
    const [dfees,setDocFees] = useState("");
    const [msg, setMessage] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${dname}`);
        console.log(`EMAIL: ${demail}`);
       

        //CREATE JSON AND STORE ALL USER INPUT
        const empobj = {
            docid: did,
            docname: dname,
            docemail: demail,
            docmobile: dmobile,
            docexp: dexp,
            docspec:dspec,
            docgender: dgender,
            docqualification: dqualification,
            docfees: dfees,
        }

        //COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/user/adddoc', empobj)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')

                //TO CLEAR DATA
                setDocId('')
                setDocName('')
                setDocEmail('')
                setDocMobile('')
                setDocGender('')
                setDocExp('')
                setDocSpec('')
                setDocQualification('')
                setDocFees('')
            });
    }
    return (
        <div>
            <Navbar />
            <br />
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit} className="form-element">
            <h3>DOCTOR REGISTRATION FORM</h3>
                <input type="text" value={did}
                    onChange={(e) => setDocId(e.target.value)} placeholder="Doctor ID"
                    required />
                <br /><br />

                <input type="text" value={dname}
                    onChange={(e) => setDocName(e.target.value)} placeholder="Doctor Name"
                    required />
                <br /><br />

                <input type="text" value={dmobile}
                    onChange={(e) => setDocMobile(e.target.value)} placeholder="Doctor Mobile"
                     />
                <br /><br />

                <input type="text" value={demail}
                    onChange={(e) => setDocEmail(e.target.value)} placeholder="Doctor Email"
                    />
                <br /><br />
                
                <input type="text" value={dspec}
                    onChange={(e) => setDocSpec(e.target.value)} placeholder="Specilization"
                    required />
                <br /><br />

                
                <input type="text" value={dqualification}
                    onChange={(e) => setDocQualification(e.target.value)} placeholder="Qualification"
                    required />
                <br /><br />
               
                <input type="number" value={dexp}
                    onChange={(e) => setDocExp(e.target.value)} placeholder="Years of Experience"
                    required />
                <br /><br />

                Gender:

                <input type="radio" name="gender" value="MALE"
                    checked={dgender === 'MALE'}
                    onChange={(e) => setDocGender(e.target.value)} />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={dgender === 'FEMALE'}
                    onChange={(e) => setDocGender(e.target.value)} />
                <label>Female</label>
                <br /><br />
               
              

                
                <input type="number" value={dfees}
                    onChange={(e) => setDocFees(e.target.value)} placeholder="Fees"
                    required />
                <br /><br />
                

                <input type="submit" value="ADD" />

            </form>
        </div>
    )
}

//STEP 3 -- EXPORT IT TO USE IT
export default Adddoc;