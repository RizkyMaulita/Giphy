import React from 'react'
import { giphyImg } from '../assets/img'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const goPath = path => history.push(path)

  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <h1 style={{ fontWeight: 'bold' }} className="text-center">WELCOME TO YOUR GIPHY</h1>
      <img src={giphyImg} alt="img-giphy" style={{ width: '90vw' }} />
      <h4 className="mb-3 text-link text-center" onClick={_ => goPath('/iron-mans')} > IRON MAN GIPHY </h4>
      <h4 className="mt-2 text-link text-center" onClick={_ => goPath('/search')} > SEARCH YOUR GIPHY </h4>
    </div>
  )
}

export default Home