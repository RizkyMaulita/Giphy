import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { List, Search } from '../components'
import { fetchGifs, resetGif } from '../store/actions/gif'
import { useDispatch, useSelector } from 'react-redux'

const Giphy = () => {
  const { gifs, totalPages, currentPage, loading, error, keyword } = useSelector(state => state.gifs)
  const [ isHit, setIsHit ] = useState(false)
  const [ title, setTitle ] = useState('')
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (pathname === '/iron-mans') {
      setTitle('IRON MAN GIPHY')
      getGifs('', 1)
    } else {
      (async () => {
        await dispatch(resetGif())
      })()
      setTitle('SEARCH YOUR GIPHY')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getGifs = async (keySearch, page = currentPage) => {
    if ((keySearch && pathname === '/search') || pathname !== '/search') {
      await dispatch(fetchGifs({ keyword: keySearch , page }))
      setIsHit(true)
    } 
  }

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <h1>{title}</h1>
      {
        pathname === '/search'
        ? <Search getGifs={keyword => getGifs(keyword)} />
        : null
      }
      { isHit && <List {...{ keyword, error, gifs, loading, currentPage, totalPages, getGifs }}/> }
    </div>
  )
}

export default Giphy