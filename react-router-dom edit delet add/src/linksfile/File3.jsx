import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const File3 = ({ formData, setFormData }) => {

    const [fname, setFirstname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [contect, setContact] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    const id = parseInt(location.state.id)
    console.log(location, "locations");

    useEffect(() => {
        if (location.state) {
            setFirstname(location.state.fname)
            setLname(location.state.lname)
            setContact(location.state.contact);
            setEmail(location.state.email)
        }
    }, [location.state]);

    const handlesubmit = (e) => {
        e.preventDefault();
        let data = {
            id: id,
            fname: fname,
            lname: lname,
            contact: contect,
            email: email,
        }

        let result = formData?.map((items) => {
            if (items.id === id) {
                return {
                    ...items,
                    ...data
                }
            }
            return items;
        })
        setFormData(result);
        navigate('/')
    }




    return (

        <div>

            <form onSubmit={handlesubmit} >


                <label>First Name</label><br />
                <input type="text" value={fname} onChange={(e) => setFirstname(e.target.value)} /><br /><br />

                <label>Last Name</label><br />
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br /><br />

                <label>Email ID</label><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

                <label>Contect Number</label><br />
                <input type="text" value={contect} onChange={(e) => setContact(e.target.value)} /><br /><br />

                <button type="submit">Submit</button>


            </form>

        </div>

    )
}

export default File3;

