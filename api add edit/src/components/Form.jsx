import axios from 'axios';
import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'

const Form = ({formData, setFormData}) => {

  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const navigate = useNavigate();


  const handalSubmit = (e) => {
    e.preventDefault();
    let data = {
      country: country,
      stateTitle: state
    }

    axios.post("http://localhost:3001/api/state/", data, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzNhZTUzNDgyYjUxNTQyMzFmZWU5MSIsInRva2VuIjoiZjQ0MDY2OGYwMzc0ZDg4M2M3MGU3Mzg5Zjc3OTMwODIiLCJpYXQiOjE3MzU3OTc3ODgsImV4cCI6MTczNTg4NDE4OH0.wWUrDDT07ggpB7ILvE2AP_GOnH_XM2g8BKTyQtchLeo"}`
      }
    })
      .then((res) => {
        navigate('/table');
        console.log(res, "res");

      })
      .catch((err) => {
        console.log(err, "err");
      })
  }

  

  
  return (
    <div>
      <Link to="/table" class="button"><i class="fa-solid fa-arrow-left"></i></Link>
      <br />
      <form onSubmit={handalSubmit} class="container main">
        <h1>Add State</h1> <br />
        <div class="col-md-11">
          <label for="inputCity" class="form-label">Country</label>
          <input type="text" class="form-control" id="inputCountry" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>


        <div class="col-md-11 ">
          <label for="inputCity" class="form-label">State Title</label>
          <input type="text" class="form-control" id="inputState" value={state} onChange={(e) => setState(e.target.value)} />
        </div>

        <br />

        <button type='submit' class="btn btn-primary">Add State</button>
      </form>

    </div>
  )
}

export default Form
