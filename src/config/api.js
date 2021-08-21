import axios from "axios"

export const API = () => {
  return axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`,
    headers: { 'Accept' : 'application/json' }
  })
}