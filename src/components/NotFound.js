import React from 'react'
import { notFoundImg } from '../assets/img'

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <img src={notFoundImg} alt="img-notfound" style={{ width: '30vw' }} />
      <h2 className="my-4">Sorry</h2>
      <h4>Gif Not Found</h4>
    </div>
  )
}

export default NotFound