import React from 'react'
import Voditem from './voditem'
import { render } from '@testing-library/react'
export default function Vudlist(props) {
  return (
    <div className=' container-fluid py-4'>
      <div className=' container'>
        <h2>list of tv :</h2>
        <div className=' row'>

          {props.vodar.map(item => {
            return (
              <Voditem key={item.imdbID} item={item} />
            )
          })}

        </div>
      </div>
    </div>
  )
}
