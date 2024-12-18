import React from "react";
import { Link, useNavigate } from "react-router-dom";


const File1 = ({formData, setFormData }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/form")
    }

   
    
    const deleteData = (id) => { 
        setFormData(formData.filter(item => item.id !== id)); 
    };


    return (
        <div>

            <table border={2}>

                <th colSpan={5}>Table</th>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Contect</td>
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
                        <Link to={"/file3"} state={item}>Edit</Link>
                        
                        </td>
                    </tr>

                ))}

            </table>

            <br /><br />

            <button onClick={() => handleClick()}>add data</button>

        </div>




    )
}

export default File1;