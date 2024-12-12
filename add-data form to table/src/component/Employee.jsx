import React, { useState } from "react";

const Employee = () => {

    const [Fname,setFname] = useState();
    const [Lname,setLname] = useState();
    const [Number,setNumber] = useState();
    const [Email,setEmail] = useState();
    const [Data,setData] = useState([]);

    const handleSub = (e) => {
        e.preventDefault();
        let data = {
            id: Data?.length + 1,
            Fname: Fname,
            Lname: Lname,
            Number: Number,
            Email: Email,
        }
        setData([...Data, data]);
        setNumber("");
        setEmail("")
        setFname("")
        setLname("")
    }
 
    return (
       

       <div>
                <table border={2}>
                    <th colSpan={5}>Employee Details</th>

                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Number</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>

                    {Data?.map((vl) =>(

                        <tr>
                            <td>{vl.Fname}</td>
                            <td>{vl.Lname}</td>
                            <td>{vl.Number}</td>
                            <td>{vl.Email}</td>
                            <td><a href="#">Edit</a><br /><a href="#">Delete</a></td>
                        </tr>
                    ))}


                </table>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


                <form  onSubmit={handleSub}>

                    <label htmlFor="#">First Name</label><br />
                    <input type="text" value={Fname} onChange={(e)=>setFname(e.target.value)} /><br /><br />

                    <label htmlFor="#">Last Name</label><br />
                    <input type="text" value={Lname} onChange={(e)=>setLname(e.target.value)} /><br /><br />

                    <label htmlFor="#">Number</label><br />
                    <input type="text" value={Number} onChange={(e)=>setNumber(e.target.value)} /><br /><br />

                    <label htmlFor="#">email</label><br />
                    <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />

                    <button type="submit">submit</button>
                </form>

       </div>
    )
}

export default Employee