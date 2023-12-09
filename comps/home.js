import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Vudstrip from './vudstrip'
import Vudlist from './vudlist'

export default function Home() {
  const [quarei] = useSearchParams()
  const [ar, setar] = useState([])

  useEffect(() => {
    let serchq = quarei.get("s") || `lego`
    adapi(serchq)
  }, [quarei])

  const adapi = async (search) => {
    let url = `http://www.omdbapi.com/?s=${search}&apikey=c1498b28`
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data);
    setar(data.Search)
  }


  return (
    <div>
      <Vudstrip />
      <Vudlist vodar={ar} />
    </div>
  )
}
