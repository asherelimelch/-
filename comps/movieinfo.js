import { wait } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
export default function Movieinfo() {

  const params = useParams()

  const nav = useNavigate()

  const [item, setitem] = useState({})

  useEffect(() => {
    adapi()
  }, [])

  const adapi = async () => {
    let url = `http://www.omdbapi.com/?i=${params["id"]}&apikey=c1498b28`
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data);
    setitem(data)
  }

  return (
    <div className=' container p-2 text-center'>
      <img src={item.Poster}
        className='col-md-3 ' />
      <h2>movie nama:{item.Title}</h2>
      <div>runtime: 100 mins{item.Runtime}</div>
      <div>rating:{item.imdbRating}</div>
      <div>genere:{item.Genre}</div>
      <div className=' col-md-5 mx-auto '>plot:{item.Plot}</div>
      <button className='btn btn-dark  mt-2 ' onClick={() => {
        nav(-1)
      }}>back to list</button>
    </div>
  )
}