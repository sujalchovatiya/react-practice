import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div>
      <h2>List Page</h2>
      <Link to={"/addPage"}>Go to add page</Link>
    </div>
  )
}

export default List


// const List = () => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate("/addPage")
//     }
//   return (
//     <div>
//       <h2>List Page</h2>
//       <button onClick={() => handleClick()}>Go to add page</button>
//     </div>
//   )
// }