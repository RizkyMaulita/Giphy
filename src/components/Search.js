import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CButton, CInput } from '@coreui/react'

const Search = props => {
  const [ keyword, setKeyword ] = useState('')
  return (
    <div className="my-4 d-flex flex-row">
      <CInput value={keyword} onChange={e => setKeyword(e.target?.value)} type="text" style={{ width: '30vw', marginRight: '20px' }} />
      <CButton style={{ backgroundColor: keyword ? '#998fed' : '#D7D2EA' }} onClick={_ => props.getGifs(keyword)} disabled={!keyword}> Search </CButton>
    </div>
  )
}

Search.propTypes = {
  getGifs: PropTypes.func
}

export default Search