import { API } from "../../config/api"
const { REACT_APP_GIPHY_API_KEY } = process.env

const getGifs = payload => {
  return {
    type: 'gif/getGifs',
    payload
  }
}

const setLoading = payload => {
  return {
    type: 'gif/setLoading',
    payload
  }
}

const setError = payload => {
  return {
    type: 'gif/setError',
    payload
  }
}

export const fetchGifs = ({ keyword, page = 1 }) => {
  return async dispatch => {
    try {
      dispatch(setLoading(true))
      dispatch(setError(false))
      const { data } = await API().get(`/search?api_key=${REACT_APP_GIPHY_API_KEY}&limit=9&q=${keyword || 'ironman'}&offset=${page - 1}`)
      if (data) {
        const { data: gifs, pagination } = data
        const payload = {
          gifs: gifs.map(gif => gif.images?.['fixed_height']?.url),
          totalPages: Math.ceil(pagination?.['total_count'] / 9),
          totalData: pagination?.total_count,
          currentPage: page,
          keyword
        }
        setTimeout(() => {
          dispatch(getGifs(payload))
          dispatch(setLoading(false))
        }, 2000)
        return gifs
      } else {
        dispatch(setLoading(false))
        return ;
      }
    } catch (error) {
      dispatch(setError(true))
      dispatch(setLoading(false))
      return error
    }
  }
}