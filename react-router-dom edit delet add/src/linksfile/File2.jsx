import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const File2 = ({formData, setFormData }) => {

    const [fname, setFirstname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [contect, setContact] = useState();
    

    const navigate = useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        let data = {
            id: formData?.length + 1,
            fname: fname,
            lname: lname,
            email: email,
            contact: contect,
            
        }
        setFormData([...formData, data]);
        navigate("/")
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

                <button>Submit</button>


            </form>

        </div>

    )
}

export default File2;

