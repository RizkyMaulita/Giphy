import { CButton } from '@coreui/react'
import React from 'react'
import { pageNotFoundImg } from '../assets/img'
import { useHistory } from 'react-router-dom'

const Page404 = () => {
  const history = useHistory()

  return (
    <div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-5 mb-3">
        <img src={pageNotFoundImg} alt="page-404" style={{ width: '50vw' }} />
        <h1 className="my-3">Sorry...</h1>
        <h2>Page Not Found !!!</h2>
        <CButton style={{ backgroundColor: '#D7D2EA', marginTop: '20px'}} onClick={_ => history.push('/')}>Back To Home</CButton>
      </div>
    </div>
  )
}

export default Page404