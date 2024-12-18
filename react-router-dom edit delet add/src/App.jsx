// import Eform from './component/Eform'
// import Employee from './component/Employee'
// import Pre from "./component/Pre"
// import List from "./List"
// import Add from "./Add"
import { Route, Routes } from "react-router-dom"
import File1 from "./linksfile/File1"
import File2 from "./linksfile/File2"
import File3 from "./linksfile/File3"
import { useState } from "react";





function App() {
  const [formData, setFormData] = useState([]);

  

  return (
   
    <div>
      {/* <Employee /> */}
      {/* <Eform /> */}
      {/* <Pre /> */}
      {/* <Routes>
        <Route path="/" exact element={<List />} />
        <Route path="/addPage" exact element={<Add />} />
      </Routes> */}
      {/* <File1 />  */}

      <Routes>
        <Route path="/" exact element={<File1 formData={formData} setFormData={setFormData} />} />
        <Route path="/form" exact element={<File2 formData={formData} setFormData={setFormData}  />} />
        <Route path="/file3" exact element={<File3 formData={formData} setFormData={setFormData} />} />
      </Routes>
    </div>
    
  )
}

export default App
