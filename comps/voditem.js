import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Voditem(props) {

    const nav = useNavigate()

    let item = props.item

    const oninfoclick = () => {
        nav(`/info/${item.imdbID}`)
    }

    return (
        <div className=' col-md-4  p-3 ' >
            <div className=' shadow  border p-2 h-100 overflow-y-hidden'>
                <img src={item.Poster} className=' float-start me-2 w-25' />
                <h3>{item.Title}:</h3>
                <div>yers : {item.Year}</div>
                <button onClick={oninfoclick} className=' btn btn-dark'>more info</button>
            </div>

        </div>
    )
}
