import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Vudinput() {
  let inputref = useRef()

  let nav = useNavigate()

  const onkekboardclik = (e) => {
    if (e.key == "Enter"){
      onsehrch();
    }
  }

  const onsehrch = () => {

    let valinput = inputref.current.value

    nav(`/?s=${valinput}`)

  }


  return (
    <div className=' container-fluid  bggrey   '>
      <div className=' container'>
        <div className=' row logo col-auto'>
          <h2 className='myvov'>my vod</h2>
          <nav className=' d-flex col-md-4'>
            <input onKeyDown={onkekboardclik} ref={inputref} placeholder='search...' type='search' className=' form-control'></input>
            <button onClick={onsehrch} className=' btn btn-info'>search</button>
          </nav>
        </div>
      </div>
    </div>
  )
}
