import React, { useState } from "react";

const Pre = () => {

    const [fname, setFirstname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [contect, setContact] = useState();
    const [formData, setFormData] = useState([]);
    


    const handlesubmit = (e) => {
        e.preventDefault();
        let data = {
            id: formData?.length + 1,
            fname: fname,
            lname: lname,
            email: email,
            contact: contect,

        }
        setFormData([...formData, data])
        setContact("")
        setEmail("")
        setFirstname("")
        setLname("")
    }
   


    const deleteData = (id) => { 
        setFormData(formData.filter(item => item.id !== id)); 
    };


    return (
        <div>
            <table border={2} >
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email ID</td>
                    <td>Contect NO.</td>
                    <td>Action</td>
                </tr>

                {formData?.map((item) => (
                    <tr>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <button onClick={() => deleteData(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}

            </table>
            <br /><br /><br />


            <form onSubmit={handlesubmit}>
                <input type="text" value={fname} onChange={(e) => setFirstname(e.target.value)} /><br /><br />
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br /><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <input type="text" value={contect} onChange={(e) => setContact(e.target.value)} /><br /><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Pre;