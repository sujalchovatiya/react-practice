import React, { useState } from "react";


const Eform = () => {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [formData, setFormData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            id: formData?.length + 1,
            fname: fname,
            lname: lname,
            contact:contact,
            email: email,
        }
        setFormData([...formData, data]);
        setContact("");
        setEmail("")
        setFname("")
        setLname("")
    }
    return (
        <div className="main">
            <div>

                <table border={2} className="tab">
                    <th colSpan={5}>Employee Details</th>

                    <tr className="tab">
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
                            <td><a href="#">Edit</a><br /><a href="#">Delete</a></td>
                        </tr>
                    ))}
                </table>
                <div><br />
                    <button>Add Employee</button>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3 container">

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">First Name</label>
                        <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Last Name</label>
                        <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>


                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input  value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">  </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contect No.</label>
                        <input type="Contect" value={contact} onChange={(e) => setContact(e.target.value)} class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </div>



            </form>
        </div>




    )
}

export default Eform;