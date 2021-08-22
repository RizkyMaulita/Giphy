import React from 'react'
import { notFoundImg } from '../assets/img'

const NotFound = ({ message }) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <img src={notFoundImg} alt="img-notfound" style={{ width: '30vw' }} />
      <h2 className="my-4">Sorry...</h2>
      <h4>{message}</h4>
    </div>
  )
}

export default NotFound