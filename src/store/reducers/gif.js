const initState = {
  gifs: [],
  keyword: '',
  totalPages: 1,
  totalData: 1,
  currentPage: 1,
  loading: false,
  error: false
}

const gifReducer = (state = initState, action) => {
  switch (action.type) {
    case 'gif/getGifs':
      return  { ...state, ...action.payload }
    case 'gif/setLoading':
      return { ...state, loading: action.payload }
    case 'gif/setError':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default gifReducer