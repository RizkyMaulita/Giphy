import React from 'react'
import { loadingGif } from '../assets/img'
import { CPagination } from '@coreui/react'
import NotFound from './NotFound'

const List = ({ keyword, error, gifs, loading, currentPage, totalPages, getGifs }) => {
  if (error) return <div>error...</div>

  return (
    <div>
      {loading
       ?  <img src={loadingGif} alt="gif" />
       :  <div>
            <div className="d-flex justify-content-center px-2 row row-cols-1 row-cols-md-4 row-cols-sm-3">
              {gifs?.map((gif, index) =><img key={index} src={gif} alt="gif" style={{ width: '400px', height: '200px', margin: '20px' }} />)}
            </div>
            {
              gifs.length
              ? <div className="d-flex justify-content-end px-5 py-3">
                  <CPagination
                    activePage={currentPage}
                    pages={totalPages}
                    onActivePageChange={numberPage => getGifs(keyword, numberPage)}
                  />
                </div>
              : <NotFound />
            }
          </div>
      }
    </div>
  )
}

export default List