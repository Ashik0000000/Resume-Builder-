import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className="d-flex my-3 justify-content-center align-items-center p-5 flex-column">
      <h1>404</h1>
      <img width={'50%'} src="https://www.natun-barta.com/images/page-not-found.png" alt="" />
      <h4>Page Not Found</h4>
      <Link className='btn btn-success' to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Pnf