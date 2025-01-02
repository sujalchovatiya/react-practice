import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Table.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Table = ({ formData, setFormData }) => {


    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/api/noAuth/state/?page=1&size=10", formData)
            .then((res) => {
                setFormData(res.data.data);
                console.log(res, "res");
            })
            .catch((err) => {
                console.log(err, "err");
            })
    }, []);


    return (

        <div>
            <Link to="/form" class="button">Add State</Link>
            <Link to="/form" class="button"><i class="fa-solid fa-arrow-right"></i></Link>
            <Link to="/dash" class="button"><i class="fa-solid fa-arrow-left"></i></Link>

            <br /> <br />
            <br />
            <table class="container table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">country</th>
                        <th scope="col">stateTitle</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {formData?.map((data, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.country}</td>
                                <td>{data.stateTitle}</td>
                                <td><Link to={"/edit"} state={data} className="btn btn-info">edit</Link></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

            <br />
            <br />


        </div>
    )
}

export default Table
