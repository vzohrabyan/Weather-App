import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Error.scss"

const ErrorPage = () => {
  return (
    <div className='error'>
        <span>404</span>
        <p>
        Sorry, an error has occurred. Requested page not found!
        </p>
        <Link to={"/"}>Back to Home</Link>
    </div>
  )
}


export default ErrorPage