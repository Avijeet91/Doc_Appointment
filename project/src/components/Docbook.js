import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import CSS for proper styling
import Navbar from './Navbar';
import axios from 'axios';

function Docbook() {
    const location = useLocation();
    const [bdocname, setBDocName] = useState("");
    const [busername, setBUserName] = useState("");
    //const [bdate, setDate] = useState("");
    const [bdate, setDate] = useState(new Date()); // Default to today
    const [error, setError] = useState("");

    // Ensure location.state values are set properly
   useEffect(() => {
    if (location.state && location.state.docname && location.state.username) {
        setBDocName(location.state.docname);
        setBUserName(location.state.username);
    }
}, [location.state]);

    // ✅ Define `handleDateChange` to update the date properly
    const handleDateChange = (date) => {
        console.log("Selected Date:", date);
        setDate(date); // Ensure date updates correctly
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(""); // Clear previous errors

        if (!bdocname || !busername) {
            setError("Invalid booking details. Please try again.");
            return;
        }

        const formattedDate = new Intl.DateTimeFormat("en-CA").format(bdate); // 'YYYY-MM-DD'

        const empobj = {
            bdocname,
            busername,
            bdate: formattedDate
        };

        try {
            const res = await axios.post('http://localhost:5000/user/docbook', empobj);
            console.log(res.data);

            // Reset the form after successful booking
            setBDocName("");
            setBUserName("");
            setDate(new Date()); // Reset date to today
        } catch (err) {
            setError("Error booking appointment. Please try again.");
            console.error(err);
        }
    };

    return (
        <div>
            <Navbar />
            <br />
            <form onSubmit={handleSubmit} className="form-element">
                <h3>Booking Form</h3>
                
                <input type="text" value={bdocname} readOnly />
                <br /><br />    

                <input type="text" value={busername} readOnly />
                <br /><br />

                {/* <div className="calendar-container">
                    {/* <Calendar onChange={handleDateChange} value={bdate} /> }
                    <Calendar value={bdate} onChange={(e) => setDate(e.value)} inline showWeek />
                </div> */}
                

                <div className="text-center">
                    {bdate ? `Your selected date: ${bdate.toDateString()}` : "No date selected"}
                </div>
                <br /><br />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit" disabled={!bdocname || !busername}>
                    Book
                </button>
            </form>
        </div>
    );
}

export default Docbook;
